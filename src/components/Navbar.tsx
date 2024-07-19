import { MutableRefObject, useState } from "react";
import { usePathfinding } from "../hooks/usePathfinding";
import { useTile } from "../hooks/useTile";
import { EXTENDED_SLEEP_TIME, MAZES, PATHFINDING_ALGORITHMS, SLEEP_TIME, SPEEDS } from "../utils/constants";
import { resetGrid } from "../utils/resetGrid";
import { AlgorithmType, MazeType, SpeedType } from "../utils/types";
import { PlayButton } from "./PlayButton";
import { Select } from "./Select";
import { useSpeed } from "../hooks/useSpeed";
import { runMazeAlgorithm } from "../utils/runMazeAlgorithm";
import { runPathfindingAlgorithm } from "../utils/runPathFindingAlgorithm";
import { animatePath } from "../utils/animatePath";

function Navbar({
    isVisualizationRunningRef,
}: {
    isVisualizationRunningRef: MutableRefObject<boolean>;
}) {
    const [isDisabled, setIsDisabled] = useState(false)
    const { maze, algorithm, setMaze, setAlgorithm, grid, setGrid, setIsGraphVisualized, isGraphVisualized } = usePathfinding();
    const { speed, setSpeed } = useSpeed();
    const { startTile, endTile } = useTile();


    const handleGenerateMaze = (maze: MazeType) => {
        if (maze === "NONE") {
            setMaze(maze);
            resetGrid({ grid, startTile, endTile });
            return;
        }

        setMaze(maze);
        console.log(maze)
        setIsDisabled(true);
        runMazeAlgorithm({
            maze,
            grid,
            startTile,
            endTile,
            setIsDisabled,
            speed
        })

        const newGrid = grid.slice();
        setGrid(newGrid);
        setIsGraphVisualized(false);

    };


    // run the algorithm if the graph has not been visualized.
    const handlerRunVisualizer = () => {
        if (isGraphVisualized) {
            setIsGraphVisualized(false);
            resetGrid({ grid: grid.slice(), startTile, endTile });
            setMaze("NONE")
            return;
        }

        const { traversedTiles, path } = runPathfindingAlgorithm({
            algorithm,
            grid,
            startTile,
            endTile,
        });

        animatePath(traversedTiles, path, startTile, endTile, speed);
        setIsDisabled(true);
        isVisualizationRunningRef.current = true;
        setTimeout(() => {
            const newGrid = grid.slice();
            setGrid(newGrid);
            setIsGraphVisualized(true);
            setIsDisabled(false);
            isVisualizationRunningRef.current = false;
        }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);
    };

    return (
        <nav className="p-5 flex md:flex-row flex-col justify-between">
            <h3 className="font-Poppins lg:text-2xl md:text-xl xs:text-sm font-bold bg-gradient-to-r from-blue-200 via-sky-500 to-cyan-200 bg-clip-text text-transparent">Pathfinding Visualizer</h3>
            {/* have the change buttons here and the select menu in the div , on smaller screens lets make them in a col type otherwise row.. */}
            <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 md:space-x-5 md:pr-3 sm:mt-3">
                <Select
                    label="Maze"
                    value={maze}
                    options={MAZES}
                    isDisabled={isDisabled}
                    onChange={(e) => {
                        // handle the maze generation
                        handleGenerateMaze(e.target.value as MazeType);
                    }}
                />
                <Select
                    label="Graph"
                    value={algorithm}
                    isDisabled={isDisabled}
                    options={PATHFINDING_ALGORITHMS}
                    onChange={(e) => {
                        setAlgorithm(e.target.value as AlgorithmType);
                    }}
                />
                <Select
                    label="Speed"
                    value={speed}
                    options={SPEEDS}
                    isDisabled={isDisabled}
                    onChange={(e) => {
                        setSpeed(parseInt(e.target.value) as SpeedType);
                    }}
                />
                <PlayButton
                    isDisabled={isDisabled}
                    isGraphVisualized={isGraphVisualized}
                    handlerRunVisualizer={handlerRunVisualizer}
                />
            </div>
        </nav>
    )
}

export default Navbar