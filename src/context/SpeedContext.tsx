import { createContext, useState } from "react";
import { SpeedType } from "../utils/types";

// Define the interface for the SpeedContext
export interface SpeedContextInterface {
    speed: SpeedType;
    setSpeed: (speed: SpeedType) => void;
}

// Create the SpeedContext with an initial value of undefined
export const SpeedContext = createContext<SpeedContextInterface | undefined>(undefined);

// Create the SpeedProvider component
export const SpeedProvider = ({ children }: { children: React.ReactNode }) => {

    // Set the initial state of speed using useState hook
    const [speed, setSpeed] = useState<SpeedType>(0.5)
    
    return (
        <SpeedContext.Provider
            value={{
                speed,
                setSpeed 
            }}
        >
            {children}
        </SpeedContext.Provider>
    );
};