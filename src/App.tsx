import { twMerge } from "tailwind-merge";
import Footer from "./components/Footer";
import { Grid } from "./components/Grid";
import Navbar from "./components/Navbar";
import { PathfindingProvider } from "./context/PathfindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import { MAX_COLS } from "./utils/constants";
import { useRef } from "react";

export default function App() {
  const isVisualizationRunningRef = useRef(false)
  return (

    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <Navbar isVisualizationRunningRef={isVisualizationRunningRef} />
          <div className={twMerge(
            `min-h-[90vh]`,

            `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${MAX_COLS * 8}px]  w-[${MAX_COLS * 7}px]`,
            `flex`,
            `justify-center`,
            `items-center`
          )}>
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
          <Footer />
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider >

  )
}

