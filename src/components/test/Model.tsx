"use client";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, Mesh, MeshPhysicalMaterial } from "three";

useGLTF.preload("earth3.glb");

const Model = () => {
  const groupRef = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/earth3.glb");
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  console.log("MATERIAl-------");
  console.log(materials);

  // Apply material properties to the earth mesh
//   useEffect(() => {
//     if (materials && nodes) {
//       const earthMesh = nodes.EarthMesh as Mesh;

//       if (earthMesh && earthMesh.material instanceof MeshPhysicalMaterial) {
//         earthMesh.material.color.set("#0d1b4c"); // More pronounced blue base color
//         earthMesh.material.metalness = 0.1; // Low metalness
//         earthMesh.material.roughness = 0.7; // Slightly less rough for some shine
//         earthMesh.material.emissive.set("#ffd700"); // Warm city lights
//         earthMesh.material.emissiveIntensity = 1.3; // Bright city lights
//         earthMesh.material.clearcoat = 0.2; // Add a subtle gloss effect
//         earthMesh.material.reflectivity = 0.2; // Low reflectivity for realism
//       }
//     }
//   }, [materials, nodes]);

  return (
    <group ref={groupRef} scale={2.6}>
      <primitive object={scene} />
    </group>
  );
};

export default Model;
