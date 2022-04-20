import BoosterRocket from "./Scene";
// Main imports
import React, { Suspense, useState } from "react";
import { OrbitControls, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer, A11y } from "@react-three/a11y";

// Component imports
import { Lights } from "../../components/lights";
import { Loader } from "../../components/loader";

import "react-responsive-modal/styles.css";

// chakra ui imports
import {
  Box,
  Button,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

import { QuestionOutlineIcon } from "@chakra-ui/icons";

// fallback image spinner
import { MoonLoader } from "react-spinners";

import boosterImage1 from "./picture-1.jpg";
import boosterImage2 from "./picture-2.jpg";

export default function BoosterRocketContainer() {
  const cameraProps = {
    fov: 75,
    near: 10,
    far: 1000,
    position: [0, 0, 100],
  };

  const {
    isOpen: booster1DrawerIsOpen,
    onOpen: booster1DrawerOnOpen,
    onClose: booster1DrawerOnClose,
  } = useDisclosure();
  const {
    isOpen: booster2DrawerIsOpen,
    onOpen: booster2DrawerOnOpen,
    onClose: booster2DrawerOnClose,
  } = useDisclosure();

  const [button1Hover, setButton1Hover] = useState(false);
  const [button2Hover, setButton2Hover] = useState(false);

  return (
    <>
      <Canvas colorManagement camera={cameraProps}>
        <OrbitControls
          // enableZoom={false}
          minDistance={30}
          maxDistance={100}
          enablePan={true}
          enableRotate={true}
        />
        <Lights
          // ambientLight={canvasHovered ? 1 : 0}
          // spotLight1={canvasHovered ? 1 : 0}
          // spotLight2={canvasHovered ? 1 : 0}
          // directionalLight={canvasHovered ? 1 : 0}
          ambientLight={0.5}
          spotLight1={1}
          spotLight2={1}
          directionalLight={1}
        />
        <Suspense fallback={<Loader />}>
          <A11y
            role="content"
            description="Two thin big white rocket engines are attached to a larger orange booster engine."
            tabIndex={0.99}
            a11yElStyle={({ width: "0px" }, { height: "0px" })}
            focusCall={() => console.log("booster focused")}
          >
            <BoosterRocket
              position={[0, -20, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </A11y>

          <Html position={[-5, 40, 0]} zIndexRange={[1, 0]} tabIndex={0.98}>
            <Button
              onClick={booster1DrawerOnOpen}
              onMouseEnter={() => {
                setButton1Hover(true);
              }}
              onMouseLeave={() => {
                setButton1Hover(false);
              }}
            >
              <QuestionOutlineIcon
                w={40}
                h={40}
                borderWidth="0px"
                borderRadius="50px"
                color={button1Hover ? "black" : "white"}
                fontSize={button1Hover ? 2 : 1}
                background={button1Hover ? "white" : "black"}
                opacity={button1Hover ? 1 : 0.5}
              />
            </Button>
          </Html>

          <Html position={[9, 0, 0]} zIndexRange={[1, 0]} tabIndex={0.97}>
            <Button
              onClick={booster2DrawerOnOpen}
              onMouseEnter={() => {
                setButton2Hover(true);
              }}
              onMouseLeave={() => {
                setButton2Hover(false);
              }}
            >
              <QuestionOutlineIcon
                w={40}
                h={40}
                borderWidth="0px"
                borderRadius="50px"
                color={button2Hover ? "black" : "white"}
                fontSize={button2Hover ? 2 : 1}
                background={button2Hover ? "white" : "black"}
                opacity={button2Hover ? 1 : 0.5}
              />
            </Button>
          </Html>
        </Suspense>
      </Canvas>
      <A11yAnnouncer />

      {/* Modal 1 */}
      <Modal
        isOpen={booster1DrawerIsOpen}
        onClose={booster1DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Booster Rockets</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            A booster rocket (or engine) is either the first stage of a
            multistage launch vehicle, or else a shorter-burning rocket used in
            parallel with longer-burning sustainer rockets to augment the space
            vehicle's takeoff thrust and payload capability.
            <br />
            <Center>
              <Box boxSize="2xl" height="full" py={4}>
                <Center>
                  <Image
                    src={boosterImage1}
                    fallback={<MoonLoader color={"red"} />}
                    alt="A space rocket with orange booster engines behind some trees"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
              </Box>
            </Center>
            Boosters are traditionally necessary to launch spacecraft into low
            Earth orbit (absent a single-stage-to-orbit design), and are
            especially important for a space vehicle to go beyond Earth
            orbit.[citation needed] The booster is dropped to fall back to Earth
            once its fuel is expended, a point known as booster engine cut-off
            (BECO).
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={booster1DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>

      {/* Modal 2 */}
      <Modal
        isOpen={booster2DrawerIsOpen}
        onClose={booster2DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Booster Rockets</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            A liquid rocket booster (LRB) uses liquid fuel and oxidizer to give
            a liquid-propellant or hybrid rocket an extra boost at take-off,
            and/or increase the total payload that can be carried. It is
            attached to the side of a rocket. Unlike solid rocket boosters, LRBs
            can be throttled down if the engines are designed to allow it, and
            can be shut down safely in an emergency for additional escape
            options in human spaceflight.
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={boosterImage2}
                    fallback={<MoonLoader color={"red"} />}
                    alt="A white space rocket beginning its launch"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
              </Box>
            </Center>
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={booster2DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
