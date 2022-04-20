import Sovereign from "./Scene";
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

import sovereignImage1 from "./picture-1.jpg";

export default function SovereignContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 130],
  };
  const {
    isOpen: sovereignDrawerIsOpen,
    onOpen: sovereignDrawerOnOpen,
    onClose: sovereignDrawerOnClose,
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
            description="Sovereign class heavy cruiser, the most famous being the Enterprise E."
            tabIndex={0.79}
            a11yElStyle={({ width: "0px" }, { height: "0px" })}
          >
            <Sovereign
              position={[0, 0, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
          </A11y>
          <Environment preset="city" />

          <Html zIndexRange={[1, 0]} position={[5, 0, 0]} tabIndex={0.79}>
            <Button
              onClick={sovereignDrawerOnOpen}
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
        isOpen={sovereignDrawerIsOpen}
        onClose={sovereignDrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">
                Sovereign Class Enterprise-E
              </ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            On stardate 49027.5, the Sovereign-class Enterprise-E, seen as the
            pinnacle of Starfleet ship design, was launched from San Francisco
            Fleet Yards, with Captain Jean-Luc Picard in command once more. Much
            of the crew of the Enterprise-D had been reassigned there, including
            almost the entire senior staff. The sole exception was Lieutenant
            Commander Worf, who had already transferred to the space station
            Deep Space 9. (Star Trek: First Contact; DS9: "The Way of the
            Warrior", "Trials and Tribble-ations")
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={sovereignImage1}
                    fallback={<MoonLoader />}
                    alt="A space rocket with orange booster engines behind some trees"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
              </Box>
            </Center>
            Asked about its construction, Ronald D. Moore replied that his
            "working assumption was that the E-E had her keel laid sometime
            during TNG's last season and was probably going to be given another
            name. When the E-D was destroyed, that Sovereign-class ship was
            nearing completion and was then christened Enterprise. This same
            sort of thing happened during WWII. After the carrier Yorktown was
            sunk at Midway, the US Navy decided to rename a carrier then under
            construction in honor of the fallen ship." (AOL chat, 1998)
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={sovereignDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
