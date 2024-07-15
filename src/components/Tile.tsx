import { twMerge } from "tailwind-merge";
import { END_TILE_STYLE, MAX_ROWS, PATH_TILE_STYLE, START_TILE_STYLE, TILE_STYLE, TRAVERSED_TILE_STYLE, WALL_TILE_STYLE } from "../utils/constants";

export function Tile({
    row,
    col,
    isStart,
    isEnd,
    isPath,
    isWall,
    isTraversed,
}: {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isPath: boolean;
    isWall: boolean;
    isTraversed: boolean;
}) {

    let tileTypeStyle;

    if (isStart) {
        tileTypeStyle = START_TILE_STYLE;
    } else if (isEnd) {
        tileTypeStyle = END_TILE_STYLE;
    }else if (isPath) {
        tileTypeStyle = PATH_TILE_STYLE;
    }else if (isTraversed) {
        tileTypeStyle = TRAVERSED_TILE_STYLE;
    }else if (isWall) {
        tileTypeStyle = WALL_TILE_STYLE;
    } else {
        tileTypeStyle = TILE_STYLE;
    }

    const borderStyle = row === MAX_ROWS - 1 ? 'border-b' : '';
    const edgeStyle = col === 0 ? 'border-l' : '';

    return (
        <div className={twMerge(tileTypeStyle, borderStyle, edgeStyle)} id={ `${row} - ${col}`} />
    )
}