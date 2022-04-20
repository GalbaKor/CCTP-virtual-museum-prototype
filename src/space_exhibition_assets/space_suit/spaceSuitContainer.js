import SpaceSuit from "./Scene";
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

import spaceSuitImage1 from "./picture-1.jpg";
import spaceSuitImage2 from "./picture-2.jpg";

export default function SpaceSuitContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 100],
  };
  const {
    isOpen: spaceSuit1DrawerIsOpen,
    onOpen: spaceSuit1DrawerOnOpen,
    onClose: spaceSuit1DrawerOnClose,
  } = useDisclosure();
  const {
    isOpen: spaceSuit2DrawerIsOpen,
    onOpen: spaceSuit2DrawerOnOpen,
    onClose: spaceSuit2DrawerOnClose,
  } = useDisclosure();
  const [button1Hover, setButton1Hover] = useState(false);
  const [button2Hover, setButton2Hover] = useState(false);
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
            description="A basic space suit without a backpack."
            tabIndex={0.99}
            a11yElStyle={({ width: "0px" }, { height: "0px" })}
          >
            <SpaceSuit position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
          </A11y>
          <Environment preset="city" />

          <Html zIndexRange={[1, 0]} position={[5, 0, 0]} tabIndex={0.98}>
            <Button
              onClick={spaceSuit1DrawerOnOpen}
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
          <Html zIndexRange={[1, 0]} position={[0, 30, 5]} tabIndex={0.97}>
            <Button
              onClick={spaceSuit2DrawerOnOpen}
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
        isOpen={spaceSuit1DrawerIsOpen}
        onClose={spaceSuit1DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Space Suits</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            A space suit or spacesuit is a garment worn to keep a human alive in
            the harsh environment of outer space, vacuum and temperature
            extremes. Space suits are often worn inside spacecraft as a safety
            precaution in case of loss of cabin pressure, and are necessary for
            extravehicular activity (EVA), work done outside spacecraft. Space
            suits have been worn for such work in Earth orbit, on the surface of
            the Moon, and en route back to Earth from the Moon.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={spaceSuitImage1}
                    fallback={<MoonLoader />}
                    alt="A space rocket with orange booster engines behind some trees"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
              </Box>
            </Center>
            Modern space suits augment the basic pressure garment with a complex
            system of equipment and environmental systems designed to keep the
            wearer comfortable, and to minimize the effort required to bend the
            limbs, resisting a soft pressure garment's natural tendency to
            stiffen against the vacuum. A self-contained oxygen supply and
            environmental control system is frequently employed to allow
            complete freedom of movement, independent of the spacecraft.
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={spaceSuit1DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>

      {/* Modal 2 */}
      <Modal
        isOpen={spaceSuit2DrawerIsOpen}
        onClose={spaceSuit2DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Space Suits</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            Three types of space suits exist for different purposes: IVA
            (intravehicular activity), EVA (extravehicular activity), and IEVA
            (intra/extravehicular activity). IVA suits are meant to be worn
            inside a pressurized spacecraft, and are therefore lighter and more
            comfortable. IEVA suits are meant for use inside and outside the
            spacecraft, such as the Gemini G4C suit. They include more
            protection from the harsh conditions of space, such as protection
            from micrometeoroids and extreme temperature change.
            <br />
            <br />
            EVA suits, such as the EMU, are used outside spacecraft, for either
            planetary exploration or spacewalks. They must protect the wearer
            against all conditions of space, as well as provide mobility and
            functionality.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={spaceSuitImage2}
                    fallback={<MoonLoader />}
                    alt="A space rocket with orange booster engines behind some trees"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
              </Box>
            </Center>
            Some of these requirements also apply to pressure suits worn for
            other specialized tasks, such as high-altitude reconnaissance
            flight. At altitudes above the Armstrong limit, around 19,000 m
            (62,000 ft), water boils at body temperature and pressurized suits
            are needed.
            <br />
            <br />
            The first full-pressure suits for use at extreme altitudes were
            designed by individual inventors as early as the 1930s. The first
            space suit worn by a human in space was the Soviet SK-1 suit worn by
            Yuri Gagarin in 1961.
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={spaceSuit2DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
