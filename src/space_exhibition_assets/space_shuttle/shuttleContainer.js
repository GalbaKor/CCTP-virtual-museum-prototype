import ShuttleModel from "./Scene";
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

import spaceShuttleImage1 from "./picture-1.jpg";
import spaceShuttleImage2 from "./picture-2.jpg";

export default function ShuttleContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 100],
  };
  const {
    isOpen: shuttle1DrawerIsOpen,
    onOpen: shuttle1DrawerOnOpen,
    onClose: shuttle1DrawerOnClose,
  } = useDisclosure();
  const {
    isOpen: shuttle2DrawerIsOpen,
    onOpen: shuttle2DrawerOnOpen,
    onClose: shuttle2DrawerOnClose,
  } = useDisclosure();

  const [button1Hover, setButton1Hover] = useState(false);
  const [button2Hover, setButton2Hover] = useState(false);

  return (
    <>
      <Canvas colorManagement camera={cameraProps} zIndex="1">
        <OrbitControls
          // enableZoom={false}
          minDistance={30}
          maxDistance={100}
          enablePan={true}
          enableRotate={true}
        />
        <Lights
          ambientLight={0.5}
          spotLight1={1}
          spotLight2={1}
          directionalLight={1}
        />
        <Suspense fallback={<Loader />}>
          <A11y
            role="content"
            description="A white and black space shuttle."
            tabIndex={0.89}
            a11yElStyle={({ width: "0px" }, { height: "0px" })}
          >
            <ShuttleModel
              position={[0, -10, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </A11y>
          <Environment preset="city" />
          <Html position={[0, 0, 15]} zIndexRange={[1, 0]} tabIndex={0.88}>
            <Button
              onClick={shuttle1DrawerOnOpen}
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
          <Html position={[5, 0, -10]} zIndexRange={[1, 0]} tabIndex={0.87}>
            <Button
              onClick={shuttle2DrawerOnOpen}
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
        isOpen={shuttle1DrawerIsOpen}
        onClose={shuttle1DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Space Shuttle</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            The Space Shuttle is a retired, partially reusable low Earth orbital
            spacecraft system operated from 1981 to 2011 by the U.S. National
            Aeronautics and Space Administration (NASA) as part of the Space
            Shuttle program. Its official program name was Space Transportation
            System (STS), taken from a 1969 plan for a system of reusable
            spacecraft where it was the only item funded for development.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={spaceShuttleImage1}
                    fallback={<MoonLoader />}
                    alt="A space rocket with orange booster engines behind some trees"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
              </Box>
            </Center>
            Five complete Space Shuttle orbiter vehicles were built and flown on
            a total of 135 missions from 1981 to 2011, launched from the Kennedy
            Space Center (KSC) in Florida. Operational missions launched
            numerous satellites, interplanetary probes, and the Hubble Space
            Telescope (HST), conducted science experiments in orbit,
            participated in the Shuttle-Mir program with Russia, and
            participated in construction and servicing of the International
            Space Station (ISS). The Space Shuttle fleet's total mission time
            was 1,323 days.
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={shuttle1DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>

      {/* Modal 2 */}
      <Modal
        isOpen={shuttle2DrawerIsOpen}
        onClose={shuttle2DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Space Shuttle</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            The first orbiter, Enterprise, was built in 1976 and used in
            Approach and Landing Tests (ALT), but had no orbital capability.
            Four fully operational orbiters were initially built: Columbia,
            Challenger, Discovery, and Atlantis. Of these, two were lost in
            mission accidents: Challenger in 1986 and Columbia in 2003, with a
            total of 14 astronauts killed. A fifth operational (and sixth in
            total) orbiter, Endeavour, was built in 1991 to replace Challenger.
            <Center>
              <Center>
                <Box boxSize="xl" height="full" py={4}>
                  <Center>
                    <Image
                      src={spaceShuttleImage2}
                      fallback={<MoonLoader />}
                      alt="A white space rocket beginning its launch"
                      objectFit="cover"
                      borderRadius="xl"
                    ></Image>
                  </Center>
                </Box>
              </Center>
            </Center>
            After it arrived at Edwards AFB, Enterprise underwent flight testing
            with the Shuttle Carrier Aircraft, a Boeing 747 that had been
            modified to carry the orbiter. In February 1977, Enterprise began
            the Approach and Landing Tests (ALT) and underwent captive flights,
            where it remained attached to the Shuttle Carrier Aircraft for the
            duration of the flight.
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={shuttle2DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
