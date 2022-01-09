// import { Exhibition1 } from "./exhibition_1";
// import { exhibitions } from "../exhibition_data";
// import { useGLTF } from "@react-three/drei";

// export function SpaceModel(props) {
//   const { nodes, materials } = useGLTF(exhibitions[0].modelPath);
//   const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);
//   if ((Exhibition1.artefactNumber = 0)) {
//     // const { nodes, materials } = useGLTF(exhibitions[0].modelPath);
//     // const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);

//     return (
//       <group {...props} dispose={null} scale={[1, 1, 1]}>
//         <mesh
//           geometry={nodes.booster.geometry}
//           material={materials.Material__198}
//           object={gltf.scene}
//           dispose={null}
//           position={exhibitions[artefactNumber].position}
//         />
//       </group>
//     );
//   } else if ((Exhibition1.artefactNumber = 1)) {
//     // const { nodes, materials } = useGLTF(exhibitions[1].modelPath);
//     // const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);
//     return (
//       <group {...props} dispose={null} scale={[1, 1, 1]}>
//         <mesh
//           geometry={nodes.shuttle.geometry}
//           material={materials.Material__197}
//           object={gltf.scene}
//           dispose={null}
//           position={exhibitions[artefactNumber].position}
//         />
//       </group>
//     );
//   } else if ((Exhibition1.artefactNumber = 2)) {
//     // const { nodes, materials } = useGLTF(exhibitions[2].modelPath);
//     // const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);
//     return (
//       <group {...props} dispose={null} scale={[1, 1, 1]}>
//         <mesh
//           geometry={nodes.saturnv.geometry}
//           material={materials.Scene__Root}
//           object={gltf.scene}
//           dispose={null}
//           position={exhibitions[artefactNumber].position}
//         />
//       </group>
//     );
//   }
// }

// seperate doesn't seem to work as well as doing the above, but neither really works idk

// // export function BoosterRocket(props) {
// //   const { nodes, materials } = useGLTF(exhibitions[0].modelPath);
// //   const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);

// //   return (
// //     <group {...props} dispose={null} scale={[1, 1, 1]}>
// //       <mesh
// //         geometry={nodes.booster.geometry}
// //         material={materials.Material__198}
// //         object={gltf.scene}
// //         dispose={null}
// //         position={exhibitions[artefactNumber].position}
// //       />
// //     </group>
// //   );
// // }

// // export function BoosterRocket(props) {
// //   const { nodes, materials } = useGLTF(exhibitions[1].modelPath);
// //   const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);
// //   return (
// //     <group {...props} dispose={null} scale={[1, 1, 1]}>
// //       <mesh
// //         geometry={nodes.shuttle.geometry}
// //         material={materials.Material__197}
// //         object={gltf.scene}
// //         dispose={null}
// //         position={exhibitions[artefactNumber].position}
// //       />
// //     </group>
// //   );
// // }

// // export function SaturnV(props) {
// //   const { nodes, materials } = useGLTF(exhibitions[2].modelPath);
// //   const gltf = useGLTF(exhibitions[artefactNumber].modelPath, true);
// //   return (
// //     <group {...props} dispose={null} scale={[1, 1, 1]}>
// //       <mesh
// //         geometry={nodes.saturnv.geometry}
// //         material={materials.Scene__Root}
// //         object={gltf.scene}
// //         dispose={null}
// //         position={exhibitions[artefactNumber].position}
// //       />
// //     </group>
// //   );
// // }
