import { ReactNode, createContext, useState } from "react";
import { AlgorithmType } from "../utils/types";
import { MazeType } from "../utils/types";
import { GridType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants";

// This is the interface for the PathfindingContext. It contains the following attributes:
// - algorithm: The selected algorithm for pathfinding.
// - setAlgorithm: A function to update the selected algorithm.
// - maze: The selected maze type.
// - setMaze: A function to update the selected maze type.
// - grid: The grid used for pathfinding.
// - setGrid: A function to update the grid.
// - isGraphVisualized: A flag to check if the graph has been visualized.
// - setIsGraphVisualized: A function to update the isGraphVisualized flag.
export interface PathfindingContextInterface {
    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;
    maze: MazeType;
    setMaze: (maze: MazeType) => void;
    grid: GridType;
    setGrid: (grid: GridType) => void;
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

// This is the context for the PathfindingContext. It is created using the createContext method from react.
export const PathfindingContext = createContext<PathfindingContextInterface | undefined>(undefined);

export const PathfindingProvider = ({ children }: { children: ReactNode }) => {
    // Set the default algorithm to "BFS".
    const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");

    // Set the default maze type to "NONE".
    const [maze, setMaze] = useState<MazeType>("NONE");

    // Create the grid using the START_TILE_CONFIGURATION and END_TILE_CONFIGURATION constants.
    const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION));

    // Set the default value of isGraphVisualized to false.
    const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

    return (
        <PathfindingContext.Provider
            value={{
                algorithm,
                setAlgorithm,
                maze,
                setMaze,
                grid,
                setGrid,
                isGraphVisualized,
                setIsGraphVisualized
            }}
        >
            {children}
        </PathfindingContext.Provider>
    );
}
