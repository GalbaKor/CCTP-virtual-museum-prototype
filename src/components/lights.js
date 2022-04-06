export const Lights = ({
  ambientLight,
  spotLight1,
  spotLight2,
  directionalLight,
}) => {
  return (
    <>
      <ambientLight intensity={ambientLight} />
      <directionalLight position={[10, 10, 5]} intensity={directionalLight} />
      <spotLight intensity={spotLight1} position={[0, 100, 0]} />
      <spotLight intensity={spotLight2} position={[40, 70, 80]} />
    </>
  );
};
