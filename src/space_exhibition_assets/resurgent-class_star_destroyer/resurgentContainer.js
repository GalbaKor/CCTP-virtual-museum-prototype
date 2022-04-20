import ResurgentClass from "./Scene";
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

import resurgentImage1 from "./picture-1.jpg";

export default function ResurgentContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 130],
  };
  const {
    isOpen: resurgentDrawerIsOpen,
    onOpen: resurgentDrawerOnOpen,
    onClose: resurgentDrawerOnClose,
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
        <Lights
          ambientLight={2}
          spotLight1={1}
          spotLight2={1}
          directionalLight={1}
        />
        <Suspense fallback={<Loader />}>
          <A11y
            role="content"
            description="A Resurgent class star destroyer."
            tabIndex={0.79}
            a11yElStyle={({ width: "0px" }, { height: "0px" })}
          >
            <ResurgentClass
              position={[0, 0, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
          </A11y>
          <Environment preset="city" />
          <Html zIndexRange={[1, 0]} position={[0, 10, 0]} tabIndex={0.78}>
            <Button
              onClick={resurgentDrawerOnOpen}
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

      {/* Modal 1 */}
      <Modal
        isOpen={resurgentDrawerIsOpen}
        onClose={resurgentDrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Resurgent</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            The Resurgent-class Star Destroyer, also known as the
            Resurgent-class Battlecruiser, the Resurgent Star Destroyer, or the
            First Order Star Destroyer was an iconic model of battlecruiser and
            Star Destroyer built by Kuat-Entralla Engineering. It saw service in
            the First Order Navy in the Unknown Regions after the signing of the
            Galactic Concordance. Based on the Imperial-class Star Destroyers of
            the Galactic Empire, it featured advanced weaponry and extreme size
            and represented the might of the emergent First Order throughout the
            galaxy.[1] It was still considered a new model by 34 ABY.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={resurgentImage1}
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
              <Button onClick={resurgentDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
