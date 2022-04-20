import VenatorClass from "./Scene";
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

import venatorImage1 from "./picture-1.jpg";
import venatorImage2 from "./picture-2.jpg";

export default function VenatorContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 150],
  };
  const {
    isOpen: venator1DrawerIsOpen,
    onOpen: venator1DrawerOnOpen,
    onClose: venator1DrawerOnClose,
  } = useDisclosure();
  const {
    isOpen: venator2DrawerIsOpen,
    onOpen: venator2DrawerOnOpen,
    onClose: venator2DrawerOnClose,
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
        <Lights
          ambientLight={0.5}
          spotLight1={1}
          spotLight2={1}
          directionalLight={1}
        />
        <Suspense fallback={<Loader />}>
          <A11y
            role="content"
            description="Venator class star destroyer."
            tabIndex={0.99}
            a11yElStyle={({ width: "0px" }, { height: "0px" })}
          >
            <VenatorClass
              position={[0, -20, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
          </A11y>
          <Environment preset="city" />

          <Html zIndexRange={[1, 0]} position={[5, -5, 20]} tabIndex={0.98}>
            <Button
              onClick={venator1DrawerOnOpen}
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
          <Html zIndexRange={[1, 0]} position={[0, 0, -30]} tabIndex={0.97}>
            <Button
              onClick={venator2DrawerOnOpen}
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
        isOpen={venator1DrawerIsOpen}
        onClose={venator1DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Venator</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            The Venator-class Star Destroyer, or Venator-class cruiser, also
            known as the Jedi cruiser, Republic attack cruiser, or Republic Star
            Destroyer, was a line of wedge-shaped cruiser-classed Star
            Destroyers in the navies of the Galactic Republic and its successor
            Galactic Empire. Designed by Lira Wessex and manufactured by Kuat
            Drive Yards, the Venator was a versatile capital ship capable of
            serving as both a combatant in ship-to-ship naval warfare and a
            starfighter carrier, while also being employed as a troop transport,
            cargo ship, and supply and replenishment vessel.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={venatorImage1}
                    fallback={<MoonLoader />}
                    alt="Venator fleet battle"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
              </Box>
            </Center>
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={venator1DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>

      {/* Modal 2 */}
      <Modal
        isOpen={venator2DrawerIsOpen}
        onClose={venator2DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Venator</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            As the backbone of the Galactic Republic's naval forces during the
            Clone Wars, the Venator was commonly employed by the Jedi Generals
            of the Grand Army of the Republic as their flagships, thus earning
            the "Jedi cruiser" moniker. Deployed across the galaxy against the
            Confederacy of Independent Systems, Venators saw action in many
            major engagements, such as the Battle of Christophsis, the
            Malevolence Campaign, the Battle of Ryloth, and the Second Battle of
            Geonosis. In the climactic Battle of Coruscant in the waning days of
            the war, some 1,000 Venators defended the galactic capital Coruscant
            against a massive Separatist fleet.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Center>
                  <Image
                    src={venatorImage2}
                    fallback={<MoonLoader />}
                    alt="Venator fleet battle"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
              </Box>
            </Center>
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={venator2DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
