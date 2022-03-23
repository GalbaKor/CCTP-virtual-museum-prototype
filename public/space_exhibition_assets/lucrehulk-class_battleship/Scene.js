/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: lightwarrior (https://sketchfab.com/lightwarrior)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/lucrehulk-class-battleship-463f1e75b70541febd2c24201585a3a7
title: Lucrehulk-class battleship
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-14383.5, -14655.08, -3895.64]}>
          <mesh geometry={nodes.Object_3.geometry} material={materials['0767c4af_dds']} />
          <mesh geometry={nodes.Object_4.geometry} material={materials['32ab8b88_dds']} />
          <mesh geometry={nodes.Object_5.geometry} material={materials['598e53ff_dds']} />
          <mesh geometry={nodes.Object_6.geometry} material={materials['66cf081b_dds']} />
          <mesh geometry={nodes.Object_7.geometry} material={materials['68e48626_dds']} />
          <mesh geometry={nodes.Object_8.geometry} material={materials['7713ed25_dds']} />
          <mesh geometry={nodes.Object_9.geometry} material={materials['85521ce2_dds']} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.c6920a60_dds} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.f7102f85_dds} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')