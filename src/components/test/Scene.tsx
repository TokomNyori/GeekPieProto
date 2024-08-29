"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";
import {
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  useProgress,
} from "@react-three/drei";
import { Fog, PointLight } from "three";

function Progressive() {
  const { progress, active } = useProgress();
  return <Html center>Loading 3D Model. {progress.toFixed(1)} % loaded</Html>;
}

const Scene = () => {
  return (
    <Canvas
      //   camera={{ position: [2, 0, 2] }}
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className={`relative h-screen w-full cursor-grab`}
    >
      {/* <directionalLight 
        position={[5, 5, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      /> */}
      {/* Directional light acting like moonlight */}
      <directionalLight
        position={[-3, -3, 3]}
        castShadow
        intensity={1.5}
        color={"#7aa2ff"} // Enhance the blue hue to simulate moonlight
      />
      <ambientLight intensity={1} color={"#2d4f8b"} />
      <pointLight position={[0, 0, 2]} intensity={0.5} color={"#ffddaa"} />
      <pointLight position={[-2, 1, 1]} intensity={0.3} color={"#ffcc88"} />
      {/* Adjust the orbit controls */}
      <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true} />
      <Suspense fallback={<Progressive />}>
        <Model />
      </Suspense>
      <Environment preset="forest" environmentIntensity={1} />
    </Canvas>
  );
};

export default Scene;
