import logo from './logo.svg';
import './App.css';
import { ZapparCamera, ZapperCanvas } from "@zappar/zappar-react-three-fiber";


function App() {
  return (
    <ZapperCanvas>
      {/* Setup Zappar Camera*/}
      <ZapparCamera />
      {/* Setup Image Tracker, passing our target file */}
     
        {/* Create a normal pink sphere to be tracked to the target */}
        <mesh>
          <sphereBufferGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
 
      {/* Normal directional light */}
      <directionalLight />
    </ZapperCanvas>
  );
}

export default App;
