import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import { Tile } from "./Tile";

export function Grid() {
    // get the grid from our hook that uses path finding interface.
    const { grid } = usePathfinding();

    return (
        <div
            className={twMerge(
                // base classes
                "flex items-center flex-col justify-center border-sky-700",
                // grid control

                // height

                `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px]  min-h-[${MAX_ROWS * 7}px]`,

                //width

                `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${MAX_COLS * 8}px]  w-[${MAX_COLS * 7}px]`

            )}>

            {grid.map((r, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {r.map((tile, tileIndex) => {
                        const {row, col, isStart, isEnd, isPath, isWall, isTraversed } = tile;

                        console.log(tileIndex , tile.row , tile.col , isStart , isEnd)

                        return (
                            <Tile
                                key={tileIndex}
                                row={row}
                                col={col}
                                isStart={isStart}
                                isEnd={isEnd}
                                isPath={isPath}
                                isWall={isWall}
                                isTraversed={isTraversed}
                           
                            />
                        );
                    })}
                </div>
            )
            )}
        </div>
    )
}