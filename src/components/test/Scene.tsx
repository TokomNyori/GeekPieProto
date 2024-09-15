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
      {/* <directionalLight
        position={[-3, -3, 3]}
        castShadow
        intensity={1.5}
        color={"#7aa2ff"} // Enhance the blue hue to simulate moonlight
      /> */}
      <ambientLight intensity={0.5} color={"#556677"} />{" "}
      {/* Slightly cooler tone to keep night-time feel */}
      {/* Directional light positioned to highlight the Earth's edges realistically */}
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
      />
      {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}
      <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true} />
      <Environment preset="sunset" environmentIntensity={0.2} />
      <Suspense fallback={<Progressive />}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
