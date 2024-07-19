import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { checkStack, isEqual } from "../../../utils/helpers";
import { GridType, TileType } from "../../../utils/types";

export const dfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
    const traversedTiles = []; // Array to store the tiles that have been traversed
    const base = grid[startTile.row][startTile.col];
    base.distance = 0;
    base.isTraversed = true;
    const untraversedTiles = [base]; // Array to store the tiles that have not been traversed yet

    while (untraversedTiles.length > 0) {
        const currentTile = untraversedTiles.pop(); // Get the last tile from the untraversedTiles array
        if (currentTile) {
            if (currentTile.isWall) continue; // Skip if the current tile is a wall
            if (currentTile.distance === Infinity) break; // Break the loop if the distance of the current tile is Infinity
            currentTile.isTraversed = true; // Mark the current tile as traversed
            traversedTiles.push(currentTile); // Add the current tile to the traversedTiles array
            if (isEqual(currentTile, endTile)) break; // Break the loop if the current tile is equal to the end tile
            const neighbors = getUntraversedNeighbors(grid, currentTile); // Get the untraversed neighbors of the current tile
            for (let i = 0; i < neighbors.length; i += 1) {
                if (!checkStack(neighbors[i], untraversedTiles)) {
                    neighbors[i].distance = currentTile.distance + 1; // Update the distance of the neighbor tile
                    neighbors[i].parent = currentTile; // Set the parent of the neighbor tile to the current tile
                    untraversedTiles.push(neighbors[i]); // Add the neighbor tile to the untraversedTiles array
                }
            }
        }
    }
    const path = []; // Array to store the path from start tile to end tile
    let current = grid[endTile.row][endTile.col];
    while (current !== null) {
        current.isPath = true; // Mark the current tile as part of the path
        path.unshift(current); // Add the current tile to the beginning of the path array
        current = current.parent!; // Move to the parent tile
    }
    return { traversedTiles, path }; // Return the traversed tiles and the path
};
