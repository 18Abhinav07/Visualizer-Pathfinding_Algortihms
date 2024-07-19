import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { dropFromQueue, isEqual } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types";

export const dijkstra = (
    grid: GridType,
    startTile: TileType,
    endTile: TileType
) => {
    const traversedTiles = []; // Array to store the tiles that have been traversed
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;
    const untraversedTiles = [base]; // Array to store the tiles that have not been traversed yet

    while (untraversedTiles.length > 0) {
        untraversedTiles.sort((a, b) => a.distance - b.distance);
        const currentTile = untraversedTiles.shift(); // Get the tile with the smallest distance from the start
        if (currentTile) {
            if (currentTile.isWall) continue; // Skip if the tile is a wall
            if (currentTile.distance === Infinity) break; // Break the loop if the distance is infinity
            currentTile.isTraversed = true; // Mark the tile as traversed
            traversedTiles.push(currentTile); // Add the tile to the traversedTiles array
            if (isEqual(currentTile, endTile)) break; // Break the loop if the current tile is the end tile
            const neighbors = getUntraversedNeighbors(grid, currentTile); // Get the untraversed neighbors of the current tile
            for (let i = 0; i < neighbors.length; i += 1) {
                if (currentTile.distance + 1 < neighbors[i].distance) {
                    dropFromQueue(neighbors[i], untraversedTiles); // Remove the neighbor from the untraversedTiles array
                    neighbors[i].distance = currentTile.distance + 1; // Update the distance of the neighbor
                    neighbors[i].parent = currentTile; // Set the parent of the neighbor to the current tile
                    untraversedTiles.push(neighbors[i]); // Add the neighbor to the untraversedTiles array
                }
            }
        }
    }

    const path = []; // Array to store the path from start to end
    let current = grid[endTile.row][endTile.col];
    while (current !== null) {
        current.isPath = true; // Mark the tile as part of the path
        path.unshift(current); // Add the tile to the beginning of the path array
        current = current.parent!; // Move to the parent tile
    }
    return { traversedTiles, path }; // Return the traversed tiles and the path
};
