import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import { Tile } from "./Tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

export function Grid({ isVisualizationRunningRef,}: { isVisualizationRunningRef: MutableRefObject<boolean> }) {
    // get the grid from our hook that uses path finding interface.
    const { grid, setGrid } = usePathfinding();
    const [isMouseDownn, setIsMouseDown] = useState(false)

    // we need to set up the functions to handle the mouse features to create or remove grids when mouse used.
    const handleMouseDown = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }

        setIsMouseDown(true);
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
    };

    const handleMouseUp = (row: number, col: number) =>{
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }

        setIsMouseDown(false)
    }

    const handleMouseEnter = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        if (isMouseDownn) {
            const newGrid = createNewGrid(grid, row, col);
            setGrid(newGrid)
        }
    }

    return (
        <div
            className={twMerge(
                // base classes
                "flex items-center flex-col justify-center hover:border-8 rounded-lg border-gray-300",
                // grid control

                // height

                `lg:min-h-[${MAX_ROWS * 30}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px]  min-h-[${MAX_ROWS * 7}px]`,

                //width

                `lg:w-[${MAX_COLS * 30}px] md:w-[${MAX_COLS * 15}px] xs:w-[${MAX_COLS * 8}px]  w-[${MAX_COLS * 7}px]`

            )}>

            {grid.map((r, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {r.map((tile, tileIndex) => {
                        const { row, col, isStart, isEnd, isPath, isWall, isTraversed } = tile;
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
                                // handleMouseDown={() => handleMouseDown(row, col)}
                                // handleMouseUp={() => handleMouseUp(row,col)}
                                // handleMouseEnter={() => handleMouseEnter(row,col)}
                                handleMouseDown={handleMouseDown}
                                handleMouseUp={handleMouseUp}
                                handleMouseEnter={handleMouseEnter}

                            />
                        );
                    })}
                </div>
            )
            )}
        </div>
    )
}