import AstronautHelmet from "./Scene";
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

import helmetImage1 from "./picture-2.jpg";

export default function SpaceHelmetContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 160,
    position: [0, 0, 100],
  };
  const {
    isOpen: spaceHelmetDrawerIsOpen,
    onOpen: spaceHelmetDrawerOnOpen,
    onClose: spaceHelmetDrawerOnClose,
  } = useDisclosure();
  const [buttonHover, setButtonHover] = useState(false);
  return (
    <>
      <Canvas
        colorManagement
        camera={cameraProps}
        zIndex="1"
        frameloop="demand"
      >
        <OrbitControls
          // enableZoom={false}
          minDistance={30}
          maxDistance={100}
          enablePan={true}
          enableRotate={true}
        />
        <Lights />
        <Suspense fallback={<Loader />}>
          <A11y
            role="content"
            description="A space suit's helmet with the visor lifted up."
            tabIndex={0.89}
            a11yElStyle={({ width: "0px" }, { height: "0px" })}
          >
            <AstronautHelmet
              position={[0, -20, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </A11y>
          <Environment preset="city" />

          <Html zIndexRange={[1, 0]} position={[5, 0, 0]} tabIndex={0.88}>
            <Button
              onClick={spaceHelmetDrawerOnOpen}
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
        isOpen={spaceHelmetDrawerIsOpen}
        onClose={spaceHelmetDrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Space Helmet</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            The development of the spheroidal dome helmet was key in balancing
            the need for field of view, pressure compensation, and low weight.
            One inconvenience with some space suits is the head being fixed
            facing forwards and being unable to turn to look sideways.
            Astronauts call this effect "alligator head".
            <br />
            <br />
            In NASA space suits, communications are provided via a cap worn over
            the head, which includes earphones and a microphone. Due to the
            coloration of the version used for Apollo and Skylab, which
            resembled the coloration of the comic strip character Snoopy, these
            caps became known as "Snoopy caps".
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={helmetImage1}
                    fallback={<MoonLoader />}
                    alt="A space rocket with orange booster engines behind some trees"
                    objectFit="cover"
                    borderRadius="xl"
                    m="auto"
                  ></Image>
                </Center>
              </Box>
            </Center>
            When space suits below a specific operating pressure are used from
            craft that are pressurized to normal atmospheric pressure (such as
            the Space Shuttle), this requires astronauts to "pre-breathe"
            (meaning pre-breathe pure oxygen for a period) before donning their
            suits and depressurizing in the air lock. This procedure purges the
            body of dissolved nitrogen, so as to avoid decompression sickness
            due to rapid depressurization from a nitrogen-containing atmosphere.
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={spaceHelmetDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
