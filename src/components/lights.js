export const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <spotLight intensity={1} position={[0, 100, 0]} />
      <spotLight intensity={0.5} position={[30, 100, 0]} />
    </>
  );
};
