import { ReactNode, createContext, useState } from "react";
import { AlgorithmType } from "../utils/types";
import { MazeType } from "../utils/types";
import { GridType } from "../utils/types";
import { createGrid } from "../utils/helpers";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants";


// This is the interface for the PathfindingContext. It contains the following attributes:
// This is required as we will have repeated use of these kinds of variables and the methods to set them.

export interface PathfindingContextInterface {

    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;

    maze: MazeType;
    setMaze: (maze: MazeType) => void;

    grid: GridType;
    setGrid: (grid: GridType) => void;

    // to check wether the graph has been made or not.

    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

// This is the context for the PathfindingContext. It is created using the createContext method from react.

export const PathfindingContext = createContext<PathfindingContextInterface | undefined>(undefined);

export const PathfindingProvider = ({ children }: { children: ReactNode }) => {


    const [algorithm, setAlgorithm] = useState<AlgorithmType>("BFS");

    const [maze, setMaze] = useState<MazeType>("NONE");

    // we nneed to create the grid first thus we need a helper function for it.
    const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION));

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
        >{children}
        </PathfindingContext.Provider>
    )
}