/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Natural History Museum Vienna (https://sketchfab.com/NHMWien)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/franz-viehbocks-sokol-space-suit-a2d679620a254660b12c7274de9bfc07
title: Franz Viehböck's Sokol Space Suit
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[177.48, 282.93, -437.98]} rotation={[2.89, 0.4, 0.47]} scale={[0, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} />
        <mesh geometry={nodes.Object_3.geometry} material={nodes.Object_3.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
