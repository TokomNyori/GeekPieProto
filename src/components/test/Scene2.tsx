"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Model2 from "./Model2";
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

const Scene2 = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, outputColorSpace: SRGBColorSpace }}
      dpr={[1, 1.5]}
      className={`relative h-screen w-full cursor-grab`}
    >
      <ambientLight intensity={0.2} color="#ffffff" />{" "}
      {/* Reduced ambient light for softer global illumination */}
      <directionalLight
        position={[5, 5, 5]} // Position adjusted for a focused light direction
        intensity={1.5} // Higher intensity to create a pronounced highlight
        color="#ffffff" // White light for clean illumination
        castShadow={true} // Enable shadow casting to add depth
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={500}
      />
      {/* Soft fill light to balance the shadows and add subtle ambient light */}
      <directionalLight
        position={[-5, -5, 5]} // Opposite side to softly fill shadows
        intensity={0.5} // Lower intensity to avoid overpowering the main light
        color="#d1d1d1" // Slightly softer tone for balance
      />
      {/* Environment light to add subtle reflections and global light */}
      <Environment
        preset="studio" // Studio preset to simulate controlled lighting environment
        background={false}
        environmentIntensity={0.3} // Moderate environment intensity for subtle reflections
      />
      <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true} />
      <Suspense fallback={<Progressive />}>
        <Model2 />
      </Suspense>
    </Canvas>
  );
};

export default Scene2;
