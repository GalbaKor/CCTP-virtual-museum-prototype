import { useProgress, Html } from "@react-three/drei";

export const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="loader">
      {progress} % loaded
    </Html>
  );
};
