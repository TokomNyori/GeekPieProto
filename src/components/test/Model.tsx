"use client";
import { useLoader, useFrame } from "@react-three/fiber";
import {
  TextureLoader,
  MeshStandardMaterial,
  Mesh,
  Vector3,
  Color,
} from "three";
import { useRef } from "react";
const textureLoader = new TextureLoader();

const Model = () => {
  const earthRef = useRef<Mesh>(null);

  // Load the night texture
  const nightTexture = useLoader(TextureLoader, "/textures/earth_night.jpg");

  // Create material using the night texture
  const earthMaterial = new MeshStandardMaterial({
    map: nightTexture, // Earth's surface texture
    emissiveMap: nightTexture, // City lights texture
    emissive: new Color(0x0f0f1f), // Dark blue emissive color to enhance the night effect
    emissiveIntensity: 5,
    roughness: 0.7, // Adjust for a slightly shiny surface
    metalness: 0.1, // Adds slight reflectivity
  });

  // // Rotate the Earth slowly
  // useFrame(() => {
  //   if (earthRef.current) {
  //     earthRef.current.rotation.y += 0.0005;
  //   }
  // });

  return (
    <mesh ref={earthRef} material={earthMaterial}>
      <sphereGeometry args={[2.2, 64, 64]} />
    </mesh>
  );
};

export default Model;

// "use client";
// import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useEffect, useRef } from "react";
// import { Group, Mesh, SRGBColorSpace, Color } from "three";

// useGLTF.preload("earth_night.glb");

// const Model = () => {
//   const groupRef = useRef<Group>(null);
//   const { nodes, materials, animations, scene } = useGLTF("/earth_night.glb");
//   const { actions, clips } = useAnimations(animations, scene);
//   const scroll = useScroll();

//   console.log("MATERIAl-------");
//   console.log(materials);

//   // useEffect(() => {
//   //   scene.traverse((child) => {
//   //     if (child instanceof Mesh) {
//   //       // Correct texture color space
//   //       if (child.material.map) {
//   //         child.material.map.colorSpace = SRGBColorSpace;
//   //         child.material.needsUpdate = true;
//   //       }
//   //     }
//   //   });
//   // }, [scene]);
//   useEffect(() => {
//     scene.traverse((child) => {
//       if (child instanceof Mesh) {
//         // Correct texture color space for better lighting response
//         if (child.material.map) {
//           child.material.map.colorSpace = SRGBColorSpace;
//           child.material.needsUpdate = true;
//         }

//         // Enhance emissive properties for the blue surface with night lights
//         if (child.material.emissive) {
//           // Slightly adjust emissive color to balance the blue surface and lights
//           child.material.emissive = child.material.color
//             .clone()
//             .lerp(new Color("#FFD700"), 0.2); // Adding a slight golden hue to enhance night lights visibility
//           child.material.emissiveIntensity = 2.8; // Adjust intensity to balance glow and blue surface

//           // Optional adjustments to fine-tune surface interaction with light
//           child.material.roughness = 0.6; // Slightly rough to reduce overly shiny appearance
//           child.material.metalness = 0.1; // Minimal metalness to avoid excessive reflections
//         }
//       }
//     });
//   }, [scene]);

//   return (
//     <group ref={groupRef} scale={40}>
//       <primitive object={scene} />
//     </group>
//   );
// };

// export default Model;
