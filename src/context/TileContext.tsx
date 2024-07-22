import { createContext, useState } from "react";
import { TileType } from "../utils/types";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants";

// Define the interface for the TileContext
export interface TileContextInterface {
    startTile: TileType; // Represents the start tile
    setStartTile: (startTile: TileType) => void; // Function to set the start tile

    endTile: TileType; // Represents the end tile
    setEndTile: (endTile: TileType) => void; // Function to set the end tile
}

// Create the TileContext
export const TileContext = createContext<TileContextInterface | undefined>(
    undefined
);

// Create the TileProvider component
export const TileProvider = ({ children }: { children: React.ReactNode }) => {

    // Define state for the start tile and end tile
    const [startTile, setStartTile] = useState<TileType>(START_TILE_CONFIGURATION);
    const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIGURATION);

    // Render the TileProvider component
    return (
        <TileContext.Provider
            value={{
                startTile,
                setStartTile,
                endTile,
                setEndTile
            }}
        >
            {children}
        </TileContext.Provider>
    );
};