import './App.css'
import Elements from './components/Elements'
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Configuration from "./components/Configuration";
import { CustomizationProvider } from "./contexts/Customization";
function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
          <Elements />
        </Canvas>
        <Configuration />
      </div>
    </CustomizationProvider>
  )
}

export default App
