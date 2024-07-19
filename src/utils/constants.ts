import { AlgorithmSelectType, MazeSelectType, SpeedSelectType } from "./types";

export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  isTraversed: false,
  distance: 0,
  parent: null
}

export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  isTraversed: false,
  distance: 0,
  parent: null
}

export const TILE_STYLE = "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-violet-400" // this size is used to size up a div in Grid component and also its parent element thus change here will be affecting that.
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-violet-900";

export const START_TILE_STYLE = TILE_STYLE + " bg-green-500";

export const END_TILE_STYLE = TILE_STYLE + " bg-red-500";

export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-500";

export const PATH_TILE_STYLE = TILE_STYLE + " bg-amber-400";



export const MAZES: MazeSelectType[] = [
  { name: "No Maze", value: "NONE" },
  { name: "Binary Tree", value: "BINARY_TREE" },
  { name: "Recursive Division", value: "RECURSIVE_DIVISION" },
];

export const PATHFINDING_ALGORITHMS: AlgorithmSelectType[] = [
  { name: "Dijkstra", value: "DIJKSTRA" },
  { name: "A-Star", value: "A_STAR" },
  { name: "Breath First Search", value: "BFS" },
  { name: "Depth First Search", value: "DFS" },
];

export const SPEEDS: SpeedSelectType[] = [
  { name: "Slow", value: 2 },
  { name: "Medium", value: 1 },
  { name: "Fast", value: 0.5 },
];

export const SLEEP_TIME = 8;
export const EXTENDED_SLEEP_TIME = 30;