// Main imports
import React, { Suspense, useRef, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer, A11y } from "@react-three/a11y";

// Component imports
import { Lights } from "../components/lights";
import { Loader } from "../components/loader";

// Model imports
import BoosterRocket from "../space_exhibition_assets/booster_rockets_and_fuel_tank/Scene";
import N1Rocket from "../space_exhibition_assets/n1_rocket/Scene";
import ShuttleModel from "../space_exhibition_assets/space_shuttle/Scene";
import SaturnV from "../space_exhibition_assets/saturn_v_rocket/Scene";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export const Exhibition2 = () => {
  const [cameraProps, setCameraProps] = useState({
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 90],
  });

  const [artefactNumber, setArtefactNumber] = useState(0);

  const [open, setOpen] = React.useState(false);
  const [tutorial, setTutorial] = React.useState(false);

  return (
    <>
      <A11yAnnouncer />
      <Canvas className="canvas-h80" colorManagement camera={cameraProps}>
        <OrbitControls
          enableZoom={false}
          minZoom={Math.PI / 4}
          maxZoom={Math.PI / 4}
          enablePan={false}
          enableRotate={false}
          // maxAzimuthAngle={Math.PI / 4}
          // maxPolarAngle={Math.PI}
          // minAzimuthAngle={-Math.PI / 4}
          // minPolarAngle={0}
        />
        <Lights />
        <Suspense fallback={<Loader />}>
          <A11y role="content" focusCall={() => console.log("in focus")}>
            <N1Rocket
              position={[-150, 20, 0]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              onClick={() => setOpen(true)}
              // plan is to call a hook and useState to change the modal content
            />
          </A11y>
          <A11y role="content" focusCall={() => console.log("in focus")}>
            <BoosterRocket
              onClick={() => setOpen(true)}
              position={[20, -20, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </A11y>
          <SaturnV
            position={[90, -50, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            onClick={() => setOpen(true)}
          />
          <ShuttleModel
            position={[-60, -40, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            onClick={() => setOpen(true)}
          />
        </Suspense>
        {/* <GizmoHelper
          alignment="top-right"
          margin={[80, 80]}
          onTarget={OrbitControls}
        >
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
          />
        </GizmoHelper> */}
      </Canvas>
      <div className="tutorial-button" onClick={() => setTutorial(true)}>
        <a href="#" className="tutorial-button-link">
          ?
        </a>
      </div>

      <Modal open={tutorial} onClose={() => setTutorial(false)}>
        <h2 className="modal-title">Tutorial</h2>
        <p>
          Click on each of the models to open more information the artefacts
          they represent. Then, when you are finished, press escape, click the
          cross or anywhere outside the information box to return to the model
          screen.
        </p>
        <p>
          If you wish to move to a different scene containing a new set of
          artefacts, cycle through the carousel below and click on the boxes to
          change scene.
        </p>
      </Modal>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <h2 className="modal-title">Artefact title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          magnam cupiditate, aliquam laborum distinctio non, saepe magni
          laudantium eum deserunt iure dolorem. Sequi id possimus sint in
          ducimus deleniti voluptate explicabo placeat. Incidunt dolor
          architecto, mollitia labore ducimus libero ea quaerat minus quia
          consequatur praesentium quas laboriosam quam illum beatae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit
          tempora eius reprehenderit dignissimos odio incidunt debitis eligendi
          earum deleniti in ea praesentium quaerat atque quam recusandae
          repellat, aliquid minus, placeat quas voluptatum velit doloremque ut.
          At corporis, sit corrupti suscipit aperiam sequi est unde, velit vero
          temporibus delectus possimus?
        </p>
        <div className="modal-image"></div>
        <div className="modal-image"></div>
      </Modal>

      <div className="bottom20">
        {/* <h1>{exhibitions[artefactNumber].title}</h1>
        <h3>{exhibitions[artefactNumber].subtitle}</h3>
        <p>{exhibitions[artefactNumber].description}</p> */}
      </div>
      {/* <div className="exhibition-title-text">
        <h1>{exhibitions[artefactNumber].title}</h1>
        <h3>{exhibitions[artefactNumber].subtitle}</h3>
        <p>{exhibitions[artefactNumber].description}</p>
      </div> */}
      {/* <button
        onClick={() => [
          setArtefactNumber(artefactNumber + 1),
          OrbitControls.controls.reset(),
        ]}
      >
        click here to change exhibit +1
      </button>
      <button onClick={() => setArtefactNumber(artefactNumber - 1)}>
        click here to change exhibit -1
      </button> */}
    </>
  );
};
