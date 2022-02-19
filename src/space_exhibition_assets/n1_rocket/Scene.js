/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Microsoft (https://sketchfab.com/microsoft)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/2f26385a5f8b4e27b65c1b46bb393908
title: N1 Rocket
*/

import React, { useRef } from "react";
import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function N1Rocket({ position, rotation, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/space_exhibition_assets/n1_rocket/scene.gltf"
  );
  const [hover, setHover] = useState(false);

  useFrame(() => {
    group.current.rotation.x += 0.002;
  });

  return (
    <group
      position={position}
      ref={group}
      {...props}
      dispose={null}
      onPointerOver={() => {
        setHover(true);
      }}
      onPointerOut={() => {
        setHover(false);
      }}
      scale={hover ? 1.05 : 1}
    >
      <group rotation={rotation}>
        <mesh
          geometry={nodes.mesh_0.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/space_exhibition_assets/n1_rocket/scene.gltf");