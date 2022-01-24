import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function Model(modelPath, modelNode, modelMaterials, modelPosition) {
  const { nodes, materials } = useGLTF(modelPath);
  const gltf = useGLTF(modelPath, true);

  const [hover, setHover] = useState(false);
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.x += 0.001;
  });

  return (
    <group
      dispose={null}
      onPointerOver={() => {
        setHover(true);
      }}
      onPointerOut={() => {
        setHover(false);
      }}
      scale={hover ? 0.8 : 0.6}
    >
      <mesh
        ref={modelRef}
        geometry={nodes.modelNode.geometry}
        material={materials.modelMaterials}
        object={gltf.scene}
        dispose={null}
        position={modelPosition}
      />
    </group>
  );
}
