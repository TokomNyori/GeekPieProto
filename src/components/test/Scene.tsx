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
import { Fog, PointLight, SRGBColorSpace } from "three";

function Progressive() {
  const { progress, active } = useProgress();
  return <Html center>Loading 3D Model. {progress.toFixed(1)} % loaded</Html>;
}

const Scene = () => {
  return (
    <Canvas
      //   camera={{ position: [2, 0, 2] }}
      //camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, outputColorSpace: SRGBColorSpace }}
      dpr={[1, 1.5]}
      className={`relative h-screen w-full cursor-grab`}
    >
      {/* Directional light acting like moonlight */}
      <directionalLight
        position={[-3, -3, 3]}
        castShadow
        intensity={1.5}
        color={"#7aa2ff"} // Enhance the blue hue to simulate moonlight
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true} />
      <Environment preset="sunset" environmentIntensity={0.4} />
      <Suspense fallback={<Progressive />}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
