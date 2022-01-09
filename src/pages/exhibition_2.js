import React, { Suspense, useRef, useEffect, useState } from "react";
import {
  Html,
  useGLTF,
  OrbitControls,
  useProgress,
  GizmoHelper,
  GizmoViewport,
  Billboard,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Lights } from "../components/lights";
import { Loader } from "../components/loader";
import { exhibitions } from "../exhibition_data";
import { SpaceModel } from "./model_data";

// const Models = (modelPath) => {
//   const gltf = useGLTF(modelPath, true);
//   const { nodes, materials } = gltf;

//   for (var i = 0; i < exhibitions.length; i++) {
//     return (
//       <mesh
//         geometry={nodes.exhibitions.geometryPath}
//         materials={materials.exhibitions.materialPath.material}
//       ></mesh>
//     );
//   }
// };

// function Model(props) {
//   // creating multiple of the same model requires directly pulling the geometry and materials as below
//   // const { nodes, materials } = useGLTF(exhibitions[0].modelPath);
//   // return (
//   //   <group {...props} dispose={null} scale={[1, 1, 1]}>
//   //     <mesh
//   //       geometry={nodes.booster.geometry}
//   //       material={materials.Material__198}
//   //     />
//   //   </group>

//   //single model - scalable variant
//   const gltf = useGLTF(exhibitions[0].modelPath, true);
//   return (
//     <primitive
//       object={gltf.scene}
//       dispose={null}
//       position={exhibitions[0].position}
//     />
//   );
// }

// const Lights = () => {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <spotLight intensity={1} position={[0, 100, 0]} />
//       <spotLight intensity={0.5} position={[30, 100, 0]} />
//     </>
//   );
// };

// function Loader() {
//   const { progress } = useProgress();
//   return <Html center>{progress} % loaded</Html>;
// }

export const Exhibition2 = () => {
  const [cameraProps, setCameraProps] = useState({
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 90],
  });

  // const [exhibitTitle, setExhibitTitle] = useState(exhibitions[0].title);

  const [artefactNumber, setArtefactNumber] = useState(0);

  // function Model() {
  //   //const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);
  //   const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);

  //   return (
  //     <primitive
  //       object={gltf.scene}
  //       // object={useGLTF(exhibitions[artefactNumber].modelPath, true).scene}
  //       dispose={null}
  //       position={exhibitions[artefactNumber].position}
  //     />
  //   );
  // }

  /* work on this part - find out if you can transfer useState across files */
  function SpaceModel(props) {
    const { nodes, materials } = useGLTF(exhibitions[artefactNumber].modelPath);
    const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);

    const [hover, setHover] = useState(false);

    if (artefactNumber === 0) {
      // const { nodes, materials } = useGLTF(exhibitions[0].modelPath);
      // const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);

      return (
        <group
          {...props}
          dispose={null}
          // scale={[1, 1, 1]}
          // interaction hover test
          onPointerOver={() => {
            setHover(true);
          }}
          onPointerOut={() => {
            setHover(false);
          }}
          scale={hover ? 1.5 : 1}
        >
          <mesh
            geometry={nodes.booster.geometry}
            material={materials.Material__198}
            object={gltf.scene}
            dispose={null}
            position={exhibitions[artefactNumber].position}
          />
        </group>
      );
    } else if (artefactNumber === 1) {
      // const { nodes, materials } = useGLTF(exhibitions[1].modelPath);
      // const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);
      return (
        <group {...props} dispose={null} scale={[1, 1, 1]}>
          <mesh
            geometry={nodes.shuttle.geometry}
            material={materials.Material__197}
            object={gltf.scene}
            dispose={null}
            position={exhibitions[artefactNumber].position}
          />
        </group>
      );
    } else if (artefactNumber === 2) {
      // const { nodes, materials } = useGLTF(exhibitions[2].modelPath);
      // const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);
      return (
        <group {...props} dispose={null} scale={[1, 1, 1]}>
          <mesh
            geometry={nodes.saturnv.geometry}
            material={materials.Scene__Root}
            object={gltf.scene}
            dispose={null}
            position={exhibitions[artefactNumber].position}
          />
        </group>
      );
    }
  }

  return (
    <>
      <Canvas
        className="canvas-h80"
        colorManagement
        // camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 90] }}
        camera={cameraProps}
      >
        <OrbitControls
          enableZoom={true}
          minZoom={Math.PI / 4}
          maxZoom={Math.PI / 4}
          enablePan={false}
          // maxAzimuthAngle={Math.PI / 4}
          // maxPolarAngle={Math.PI}
          // minAzimuthAngle={-Math.PI / 4}
          // minPolarAngle={0}
        />
        <Lights />
        <Suspense fallback={<Loader />}>
          {/* multiple models via multi load */}
          {/* <Model position={[-50, -20, 1]} rotation={[5, 0, 3]} /> */}
          {/* <Model position={[0, -20, 1]} rotation={[5, 0, 1.5]} /> */}
          {/* <Model position={[50, -20, 1]} rotation={[5, 0, 3]} /> */}
          {/* single model via multi load */}
          {/* <Model position={[0, -30, 0]} rotation={[5, 0, 0]} /> */}

          {/* single model load gltf */}
          {/* <Model modelPath={exhibitions[artefactNumber].modelPath} /> */}
          <SpaceModel />
        </Suspense>
        <GizmoHelper
          alignment="top-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
          // onUpdate={/* called during camera animation  */}
          onTarget={OrbitControls}
        >
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
          />
          {/* alternative: <GizmoViewcube /> */}
        </GizmoHelper>
      </Canvas>
      <div className="exhibition-title-text">
        {/* <h1>{exhibitTitle}</h1> */}
        <h1>{exhibitions[artefactNumber].title}</h1>
        <h3>{exhibitions[artefactNumber].subtitle}</h3>
        <p>{exhibitions[artefactNumber].description}</p>
      </div>
      {/* <button onClick={() => setExhibitTitle(exhibitions[1].title)}>
        click here to change exhibit
      </button> */}
      <button
        onClick={() => [
          setArtefactNumber(artefactNumber + 1),
          OrbitControls.controls.reset(),
        ]}
      >
        click here to change exhibit +1
      </button>
      <button onClick={() => setArtefactNumber(artefactNumber - 1)}>
        click here to change exhibit -1
      </button>
    </>
  );
};
