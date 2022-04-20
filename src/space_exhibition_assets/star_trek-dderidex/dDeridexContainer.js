import Dderidex from "./Scene";
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

import dderidexImage1 from "./picture-1.jpg";

export default function DderidexContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 130],
  };
  const {
    isOpen: dderidexDrawerIsOpen,
    onOpen: dderidexDrawerOnOpen,
    onClose: dderidexDrawerOnClose,
  } = useDisclosure();
  const [buttonHover, setButtonHover] = useState(false);
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
            description="Romulan D'deridex warbird."
            tabIndex={0.99}
            a11yElStyle={({ width: "0px" }, { height: "0px" })}
          >
            <Dderidex
              position={[0, 0, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
          </A11y>
          <Environment preset="city" />

          <Html zIndexRange={[1, 0]} position={[5, 0, 0]} tabIndex={0.98}>
            <Button
              onClick={dderidexDrawerOnOpen}
              onMouseEnter={() => {
                setButtonHover(true);
              }}
              onMouseLeave={() => {
                setButtonHover(false);
              }}
            >
              <QuestionOutlineIcon
                w={40}
                h={40}
                borderWidth="0px"
                borderRadius="50px"
                margin="2"
                padding="1"
                // borderColor="white"
                color={buttonHover ? "black" : "white"}
                fontSize={buttonHover ? 2 : 1}
                // color="white"
                background={buttonHover ? "white" : "black"}
                opacity={buttonHover ? 1 : 0.5}
              />
            </Button>
          </Html>
        </Suspense>
      </Canvas>
      <A11yAnnouncer />

      <Modal
        isOpen={dderidexDrawerIsOpen}
        onClose={dderidexDrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">D'deridex</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            The D'deridex-class warbird was classified as a battle cruiser by
            Starfleet. Using a forced quantum singularity as a power source and
            the latest in Romulan cloaking technology, the D'deridex was not
            only one of the most advanced vessels in the Romulan Star Empire,
            but also in the Alpha Quadrant. These warbirds were roughly twice as
            long as a Federation Galaxy-class starship with a lower overall
            maximum warp.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={dderidexImage1}
                    fallback={<MoonLoader />}
                    alt="A space rocket with orange booster engines behind some trees"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
              </Box>
            </Center>
            Although not mentioned on screen, the original Andrew Probert design
            of the warbird was to have a single torpedo launcher positioned at
            the upper "nape" of the ship, at the top foremost position of the
            upper "shell". In addition, the warbird was to have a total of ten
            disruptor emitters, positioned in various locations on the model.
            These positions included: one pair on the "head" (one on either
            "cheek"), one pair on the vertical structure at the aft end of the
            ship (one on either side), two pairs on the aft edges of the port
            and starboard dorsal and ventral wings (one emitter at each
            location, for a total of four), and one pair at the dorsal apex of
            the ship. However, two other emitters are seen on at least one
            warbird, namely in the "nose" (pictured) and top part of the upper
            "back" (shown in The Next Generation episode "Contagion").
          </ModalBody>

          <Center>
            <ModalFooter>
              <Button onClick={dderidexDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
