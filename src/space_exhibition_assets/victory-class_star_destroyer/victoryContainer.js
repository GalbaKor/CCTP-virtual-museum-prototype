import VictoryClass from "./Scene";
// Main imports
import React, { Suspense, useState } from "react";
import { OrbitControls, Html, Environment } from "@react-three/drei";
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

import victoryImage1 from "./picture-1.jpg";
import victoryImage2 from "./picture-2.jpg";

export default function VictoryContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 150],
  };
  const {
    isOpen: victory1DrawerIsOpen,
    onOpen: victory1DrawerOnOpen,
    onClose: victory1DrawerOnClose,
  } = useDisclosure();
  const {
    isOpen: victory2DrawerIsOpen,
    onOpen: victory2DrawerOnOpen,
    onClose: victory2DrawerOnClose,
  } = useDisclosure();
  const [button1Hover, setButton1Hover] = useState(false);
  const [button2Hover, setButton2Hover] = useState(false);
  return (
    <>
      <Canvas colorManagement camera={cameraProps} zIndex="1">
        <OrbitControls
          // enableZoom={false}
          minDistance={30}
          maxDistance={150}
          enablePan={true}
          enableRotate={true}
        />
        <Lights />
        <Suspense fallback={<Loader />}>
          <A11y
            role="content"
            description="A Victory class star destroyer."
            tabIndex={0.89}
            a11yElStyle={({ width: "0px" }, { height: "0px" })}
          >
            <VictoryClass
              position={[0, -20, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
          </A11y>
          <Environment preset="city" />

          <Html zIndexRange={[1, 0]} position={[-25, 0, -50]} tabIndex={0.88}>
            <Button
              onClick={victory1DrawerOnOpen}
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
                margin="2"
                padding="1"
                color={button1Hover ? "black" : "white"}
                fontSize={button1Hover ? 2 : 1}
                background={button1Hover ? "white" : "black"}
                opacity={button1Hover ? 1 : 0.5}
              />
            </Button>
          </Html>
          <Html zIndexRange={[1, 0]} position={[5, -3, 0]} tabIndex={0.87}>
            <Button
              onClick={victory2DrawerOnOpen}
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
        isOpen={victory1DrawerIsOpen}
        onClose={victory1DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Victory I</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            The Victory I-class Star Destroyer, also known as the Victory
            I-class Destroyer and Victoria I-class Star Destroyer, was a warship
            designed for planetary defense, planetary assault, ground troop
            support, and ship-to-ship combat. It was used by the Galactic
            Republic during the mid-Clone Wars, the Galactic Empire and the
            Corporate Sector during the Galactic Civil War and the Confederation
            during the Second Galactic Civil War.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={victoryImage1}
                    fallback={<MoonLoader />}
                    alt="A space rocket with orange booster engines behind some trees"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
              </Box>
            </Center>
            The Victory I-class Star Destroyer's biggest disadvantage was its
            underpowered LF9 ion engines, which could not produce sufficient
            acceleration to pursue newer and faster ships, allowing them to
            escape ship-to-ship combat. This flaw was rectified in the limited
            Victory II-class, produced shortly before the advent of the Empire.
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={victory1DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>

      {/* Modal 2 */}
      <Modal
        isOpen={victory2DrawerIsOpen}
        onClose={victory2DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Victory II</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            The Victory II-class Star Destroyer was a class of Star Destroyer
            that was manufactured by Kuat Drive Yards as a successor to the
            original Victory-class Star Destroyer. Initially a life extension
            program, it became the Victory II program which introduced the
            Victory II-class, and sought to fix many problems from the previous
            model including increasing combat performance and longevity. Despite
            the rebuilds, the Victory II was not able to correct all of the
            issues of its predecessor.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={victoryImage2}
                    fallback={<MoonLoader />}
                    alt="A space rocket with orange booster engines behind some trees"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
              </Box>
            </Center>
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={victory2DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
