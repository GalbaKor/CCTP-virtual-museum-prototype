/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Wholock (https://sketchfab.com/wholock)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/star-trek-sovereign-class-e54ca13f5a3747c584dd304e4bb81826
title: Star Trek - Sovereign Class
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Sovereign({ position, rotation, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/space_exhibition_assets/star_trek-sovereign/scene.gltf"
  );
  return (
    <group ref={group} position={position} {...props} dispose={null}>
      <group rotation={rotation}>
        <group rotation={[0, 0, -3.14]} scale={0.16}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={
                nodes.Sovereign_Class_Sovereign_Class_diffuse_1_1_0.geometry
              }
              material={materials.Sovereign_Class_diffuse_1_1}
            />
            <mesh
              geometry={
                nodes.Sovereign_Class_Sovereign_Class_decals_1_0.geometry
              }
              material={materials.Sovereign_Class_decals_1}
            />
            <mesh
              geometry={
                nodes.Sovereign_Class_Sovereign_Class_diffuse_2_1_0.geometry
              }
              material={materials.Sovereign_Class_diffuse_2_1}
            />
            <mesh
              geometry={
                nodes.Sovereign_Class_Sovereign_Class_diffuse_3_1_0.geometry
              }
              material={materials.Sovereign_Class_diffuse_3_1}
            />
            <group position={[-200, 200, 200]} rotation={[1.11, -0.42, 0.69]}>
              <group rotation={[Math.PI / 2, 0, 0]} />
            </group>
            <group position={[0, 0, 1305.76]} rotation={[0, Math.PI / 2, 0]} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/space_exhibition_assets/star_trek-sovereign/scene.gltf");