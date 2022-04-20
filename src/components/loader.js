// code taken from poimandres, drei documentation
// https://github.com/pmndrs/drei#loading

import { useProgress, Html } from "@react-three/drei";

export const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="loader">
      {progress} % loaded
    </Html>
  );
};
