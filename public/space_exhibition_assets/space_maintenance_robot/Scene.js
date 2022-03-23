/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: (Andy An)norbyscook (https://sketchfab.com/norbyscook)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/space-maintenance-robot-a612ed4feea14fc390beeb3a47943054
title: space maintenance robot
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.mesh_0.geometry} material={materials['defaultMat.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')