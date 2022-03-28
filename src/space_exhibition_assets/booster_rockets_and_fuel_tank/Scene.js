/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Microsoft (https://sketchfab.com/microsoft)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/b82e419607214780a5c65e4a8f455735
title: Booster Rockets and Fuel Tank
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BoosterRocket({ position, rotation, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/space_exhibition_assets/booster_rockets_and_fuel_tank/scene.gltf"
  );

  return (
    <group position={position} ref={group} {...props} dispose={null}>
      <group rotation={rotation}>
        <mesh
          geometry={nodes.booster.geometry}
          material={materials.Material__198}
        ></mesh>
      </group>
    </group>
  );
}

useGLTF.preload(
  "/space_exhibition_assets/booster_rockets_and_fuel_tank/scene.gltf"
);
