
import { destroyTile } from "./helpers";
import { GridType, SpeedType } from "./types"

export const destroyWall = async (
    grid: GridType,
    row: number,
    col: number,
    isRight: number,
    speed: SpeedType,
) => {

    // a dumb note: use await for calling any async function, i didn't at first so the animation went haywire.
    if (isRight && grid[row][col + 1]) {
        await destroyTile(grid, row, col + 1, speed);

    } else if (grid[row + 1]) {
        await destroyTile(grid, row +1 , col, speed);

    } else {
        await destroyTile(grid, row, col, speed);
    }
}