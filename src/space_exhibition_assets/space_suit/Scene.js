/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: IgorSholopov (https://sketchfab.com/IgorSholopov)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/space-suit-bdc42075279746dab4c8b54784276a20
title: Space suit
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function SpaceSuit({ position, rotation, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/space_exhibition_assets/space_suit/scene.gltf"
  );
  return (
    <group ref={group} position={position} {...props} dispose={null}>
      <group rotation={rotation} scale={40}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.base_002}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.ventsmain_001}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.buttons}
          />
          <mesh
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.helm_gold_det}
          />
          <mesh
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.helmet}
          />
          <mesh
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.seal}
          />
          <mesh
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.helm_gold}
          />
          <mesh
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.boots}
          />
          <mesh
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials.gloves}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/space_exhibition_assets/space_suit/scene.gltf");
