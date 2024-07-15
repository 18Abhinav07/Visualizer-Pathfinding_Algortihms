import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./context/PathfindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

export default function App() {
  return (

    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">

            <Grid />
       
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>

  )
}

