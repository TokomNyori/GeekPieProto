"use client";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/website.glb");

const Model2 = () => {
  const groupRef = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/website.glb");
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  //   useEffect(() => {
  //     //@ts-ignore
  //     const experimentAction = actions["Base Stack"];
  //     if (experimentAction) {
  //       experimentAction.play(); // Ensure it plays first
  //       experimentAction.paused = true; // Then set paused property
  //     }
  //   }, []);

  //   useFrame(() => {
  //     const experimentAction = actions["Base Stack"];
  //     if (experimentAction) {
  //       const clip = experimentAction.getClip();
  //       experimentAction.time = (clip.duration * scroll.offset) / 3;
  //     }
  //   });

  return (
    <group ref={groupRef} scale={1.1}>
      <primitive object={scene} />
    </group>
  );
};

export default Model2;
