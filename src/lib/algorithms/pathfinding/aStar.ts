import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { dropFromQueue, isEqual } from "../../../utils/helpers";
import { initFunctionCost, initHeuristicCost } from "../../../utils/heuristics";
import { GridType, TileType } from "../../../utils/types";

// A* algorithm implementation
export const aStar = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType
) => {
    const traversedTiles = []; // Array to store the tiles that have been traversed
    const heuristicCost = initHeuristicCost(grid, endTile); // Calculate the heuristic cost for each tile
    const functionCost = initFunctionCost(); // Initialize the function cost for each tile
    const base = grid[startTile.row][startTile.col]; // Starting tile
    base.distance = 0; // Set the distance of the starting tile to 0
    functionCost[base.row][base.col] =
        base.distance + heuristicCost[base.row][base.col]; // Calculate the function cost for the starting tile
    base.isTraversed = true; // Mark the starting tile as traversed
    const untraversedTiles = [base]; // Array to store the untraversed tiles

    while (untraversedTiles.length > 0) {
        untraversedTiles.sort((a, b) => {
            if (functionCost[a.row][a.col] === functionCost[b.row][b.col]) {
                return b.distance - a.distance;
            }
            return functionCost[a.row][a.col] - functionCost[b.row][b.col];
        });
        const currentTile = untraversedTiles.shift(); // Get the tile with the lowest function cost
        if (currentTile) {
            if (currentTile.isWall) continue; // Skip if the tile is a wall
            if (currentTile.distance === Infinity) break; // Break if the distance is infinity
            currentTile.isTraversed = true; // Mark the current tile as traversed
            traversedTiles.push(currentTile); // Add the current tile to the traversed tiles array
            if (isEqual(currentTile, endTile)) break; // Break if the current tile is the end tile

            const neighbors = getUntraversedNeighbors(grid, currentTile); // Get the untraversed neighbors of the current tile
            for (let i = 0; i < neighbors.length; i += 1) {
                const distanceToNeighbor = currentTile.distance + 1; // Calculate the distance to the neighbor
                if (distanceToNeighbor < neighbors[i].distance) {
                    dropFromQueue(neighbors[i], untraversedTiles); // Remove the neighbor from the untraversed tiles array
                    neighbors[i].distance = distanceToNeighbor; // Update the distance of the neighbor
                    functionCost[neighbors[i].row][neighbors[i].col] =
                        neighbors[i].distance +
                        heuristicCost[neighbors[i].row][neighbors[i].col]; // Update the function cost of the neighbor
                    neighbors[i].parent = currentTile; // Set the parent of the neighbor to the current tile
                    untraversedTiles.push(neighbors[i]); // Add the neighbor to the untraversed tiles array
                }
            }
        }
    }

    const path = []; // Array to store the path from start to end
    let current = grid[endTile.row][endTile.col]; // Start from the end tile
    while (current !== null) {
        current.isPath = true; // Mark the current tile as part of the path
        path.unshift(current); // Add the current tile to the beginning of the path array
        current = current.parent!; // Move to the parent tile
    }

    return { traversedTiles, path }; // Return the traversed tiles and the path
};
