"use client";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, Mesh, MeshPhysicalMaterial, SRGBColorSpace } from "three";
import { EarthMaterial } from "./EarthMaterial ";

useGLTF.preload("earth_night.glb");

const Model = () => {
  const groupRef = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/earth_night.glb");
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  console.log("MATERIAl-------");
  console.log(materials);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        // Correct texture color space
        if (child.material.map) {
          child.material.map.colorSpace = SRGBColorSpace;
          child.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  return (
    <group ref={groupRef} scale={40}>
      <primitive object={scene} />
    </group>
  );
};

export default Model;
