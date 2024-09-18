"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";
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

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, outputColorSpace: SRGBColorSpace }}
      dpr={[1, 1.5]}
      className={`relative h-screen w-full cursor-grab`}
    >
      {/* <ambientLight intensity={0.5} color={"#556677"} />{" "}
      <directionalLight
        position={[-80, 30, -60]} // Positioned further to the side and higher to better target the Earth's edge
        castShadow
        intensity={0.5} // Slightly reduced intensity to avoid overpowering the night scene
        color={"#ffd590"} // Soft warm color to mimic the sunlight glow on the edge
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />
      <directionalLight
        position={[70, 15, -45]} // Positioned to create a gentle highlight on the opposite edge
        intensity={0.3} // Reduced intensity to enhance edge lighting without affecting the center
        color={"#ffb877"} // Warm color to complement the main light
      /> */}
      {/* Darker blue ambient light to enhance the night-time look */}
      <ambientLight intensity={1} color="#0f0f1f" />

      {/* Multiple directional lights to evenly distribute light across the Earth */}
      <directionalLight
        position={[10, 10, 10]} // Positioned to provide even lighting
        intensity={0.7} // Moderate intensity for balanced illumination
        color="#ffffbb" // Neutral warm tone
      />

      <directionalLight
        position={[-10, -10, 10]} // Opposite side for balance
        intensity={0.7} // Matching intensity to distribute light evenly
        color="#ffffbb"
      />

      <directionalLight
        position={[10, -10, -10]} // Additional light to cover any dark spots
        intensity={0.7}
        color="#ffffbb"
      />

      <directionalLight
        position={[-10, 10, -10]} // Final light to ensure full coverage
        intensity={0.7}
        color="#ffffbb"
      />

      {/* Environment light for soft global illumination */}
      <Environment
        preset="night"
        background={false}
        environmentIntensity={0.2}
      />
      <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true} />
      <Suspense fallback={<Progressive />}>
        <Model2 />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
