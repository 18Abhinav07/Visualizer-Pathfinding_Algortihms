import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TileType } from "./types";

// Function to calculate the heuristic cost between two tiles using Manhattan distance
const retrieveHeuristicCost = (currentTile: TileType, endTile: TileType) => {
    const manhattanDistance = 1;
    const r = Math.abs(currentTile.row - endTile.row);
    const c = Math.abs(currentTile.col - endTile.col);
    return manhattanDistance * (r + c);
};

// Function to initialize the heuristic cost array for each tile in the grid
export const initHeuristicCost = (grid: GridType, endTile: TileType) => {
    const heuristicCost = [];
    for (let i = 0; i < MAX_ROWS; i += 1) {
        const row = [];
        for (let j = 0; j < MAX_COLS; j += 1) {
            // Calculate the heuristic cost for each tile in the grid
            row.push(retrieveHeuristicCost(grid[i][j], endTile));
        }
        heuristicCost.push(row);
    }
    return heuristicCost;
};

// Function to initialize the function cost array with initial values of Infinity
export const initFunctionCost = () => {
    const functionCost = [];
    for (let i = 0; i < MAX_ROWS; i += 1) {
        const row = [];
        for (let j = 0; j < MAX_COLS; j += 1) {
            // Set the initial function cost for each tile to Infinity
            row.push(Infinity);
        }
        functionCost.push(row);
    }
    return functionCost;
};
