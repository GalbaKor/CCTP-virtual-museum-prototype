import SaturnV from "./Scene";
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

import saturnVImage1 from "./picture-1.jpg";
import saturnVImage2 from "./picture-2.jpg";

export default function SaturnVContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 100],
  };
  const {
    isOpen: saturnV1DrawerIsOpen,
    onOpen: saturnV1DrawerOnOpen,
    onClose: saturnV1DrawerOnClose,
  } = useDisclosure();
  const {
    isOpen: saturnV2DrawerIsOpen,
    onOpen: saturnV2DrawerOnOpen,
    onClose: saturnV2DrawerOnClose,
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
          ambientLight={0.3}
          spotLight1={1}
          spotLight2={1}
          directionalLight={0.6}
        />
        <Suspense fallback={<Loader />}>
          <A11y
            role="content"
            description="A Saturn V rocket."
            tabIndex={0.79}
            a11yElStyle={({ width: "0px" }, { height: "0px" })}
          >
            <SaturnV position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]} />
          </A11y>
          <Environment preset="city" />
          <Html zIndexRange={[1, 0]} position={[0, 0, 0]} tabIndex={0.78}>
            <Button
              onClick={saturnV1DrawerOnOpen}
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
          <Html zIndexRange={[1, 0]} position={[-4, 30, 0]} tabIndex={0.77}>
            <Button
              onClick={saturnV2DrawerOnOpen}
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
        isOpen={saturnV1DrawerIsOpen}
        onClose={saturnV1DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Saturn V</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            Saturn V (pronounced Saturn five) was an American human-rated,
            three-stage, liquid-fueled super heavy-lift launch vehicle developed
            by NASA under the Apollo program for human exploration of the Moon.
            It was flown from 1967 to 1973. It was used for nine crewed flights
            to the Moon, and to launch Skylab, the first American space station.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={saturnVImage1}
                    fallback={<MoonLoader />}
                    alt="A space rocket with orange booster engines behind some trees"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
              </Box>
            </Center>
            As of 2022, the Saturn V remains the only launch vehicle to carry
            humans beyond low Earth orbit. Saturn V holds records for the
            heaviest payload launched and largest payload capacity to low Earth
            orbit (LEO): 310,000 lb (140,000 kg), which included the third stage
            and unburned propellant needed to send the Apollo command and
            service module and Lunar Module to the Moon.
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={saturnV1DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>

      {/* Modal 2 */}
      <Modal
        isOpen={saturnV2DrawerIsOpen}
        onClose={saturnV2DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Saturn V</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            The largest production model of the Saturn family of rockets, the
            Saturn V was designed under the direction of Wernher von Braun at
            the Marshall Space Flight Center in Huntsville, Alabama; the lead
            contractors were Boeing, North American Aviation, Douglas Aircraft
            Company, and IBM. A total of 15 flight-capable vehicles were built,
            plus three for ground testing. Thirteen were launched from Kennedy
            Space Center with no loss of crew or payload. A total of 24
            astronauts were launched to the Moon from December 1968 through
            December 1972.
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={saturnVImage2}
                    fallback={<MoonLoader />}
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
              <Button onClick={saturnV2DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
