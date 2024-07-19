
// Different types of custom data needed to render the grid and the variables to be given down to all the state components.
export type AlgorithmType = "DIJKSTRA" | "A_STAR" | "BFS" | "DFS";

export interface AlgorithmSelectType {
    name: string;
    value: AlgorithmType;
}

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

export interface MazeSelectType {
    name: string;
    value: MazeType;
}

// signifies the attributes of each tile.

export type TileType = {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isPath: boolean;
    isWall: boolean;
    isTraversed: boolean;
    distance: number;
    parent: TileType | null;

};

export type GridType = TileType[][];

export type SpeedType = 2 | 1 | 0.5;

export interface SpeedSelectType {
    name: string;
    value: SpeedType;
}