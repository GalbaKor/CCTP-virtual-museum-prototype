// defines 4 lights for the canvas
// an ambient, two spotlights and a directional to produce shadows
// improves visual contrast between certain textures

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
