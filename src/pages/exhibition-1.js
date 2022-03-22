// Main imports
import React, { Suspense, useState, useEffect } from "react";
import { OrbitControls, Html, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer, A11y } from "@react-three/a11y";
import { useMediaQuery } from "react-responsive";
// import {
//   EffectComposer,
//   Selection,
//   Select,
//   Outline,
// } from "@react-three/postprocessing";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { MapControls } from "@react-three/drei";

// Component imports
import { Lights } from "../components/lights";
import { Loader } from "../components/loader";

// Model imports
import BoosterRocket from "../space_exhibition_assets/booster_rockets_and_fuel_tank/Scene";
import ShuttleModel from "../space_exhibition_assets/space_shuttle/Scene";
import SaturnV from "../space_exhibition_assets/saturn_v_rocket/Scene";
import VictoryClass from "../space_exhibition_assets/victory-class_star_destroyer/Scene";

// import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

// chakra ui imports
import {
  Box,
  Button,
  Container,
  Grid,
  Text,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

import {
  QuestionOutlineIcon,
  HamburgerIcon,
  Search2Icon,
} from "@chakra-ui/icons";

import spaceBackground2 from "../space_exhibition_assets/space_background_2.jpg";
import { hover } from "@testing-library/user-event/dist/hover";

export const Exhibition1 = ({ setApp }) => {
  // mobile queries
  const isMobileScreen = useMediaQuery({
    query: "(min-width: 640px)",
  });

  // Modal and Drawer variables
  // navigation
  const {
    isOpen: modalNavIsOpen,
    onOpen: modalNavOnOpen,
    onClose: modalNavOnClose,
  } = useDisclosure();

  // tutorial
  const {
    isOpen: tutorialDrawerIsOpen,
    onOpen: tutorialDrawerOnOpen,
    onClose: tutorialDrawerOnClose,
  } = useDisclosure();
  const tutorialRef = React.useRef();

  // main menu
  const {
    isOpen: menuDrawerIsOpen,
    onOpen: menuDrawerOnOpen,
    onClose: menuDrawerOnClose,
  } = useDisclosure();
  const menuRef = React.useRef();

  // object data for navigation
  const artefactNavigations = [
    { id: 1, name: "Rockets", background: "https://via.placeholder.com/450" },
    { id: 2, name: "Sci-Fi", background: "https://via.placeholder.com/450" },
    { id: 3, name: "Sci-Fi 2", background: "https://via.placeholder.com/450" },
    { id: 4, name: "Aliens", background: "https://via.placeholder.com/450" },
    {
      id: 5,
      name: "Astronauts",
      background: "https://via.placeholder.com/450",
    },
    {
      id: 6,
      name: "Other",
      background: "https://via.placeholder.com/450",
    },
  ];

  const [artefactGroup, setArtefactGroup] = useState(1);
  // turns out useEffect wasn't actually necessary, but it's good for debug purposes regardless
  useEffect(() => {
    console.log("Artefact group " + [artefactGroup]);
  }, [artefactGroup]);

  return (
    <>
      {/* Background image container */}
      <Container
        style={{
          backgroundImage: `url(${spaceBackground2})`,
          backgroundSize: "cover",
        }}
        minWidth="full"
        minHeight="100vh"
        pos="fixed"
      ></Container>

      {/* Grid of models */}
      {artefactGroup === 1 && (
        <Container minWidth="full" minHeight="100vh">
          {/* Responsive grid - 1 column for small mobile, 2 for small-medium laptop screens, 3 for larger desktops */}
          <Center minWidth="full">
            <Grid
              minWidth="full"
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
            >
              {/* Canvas model containers take up the full height and width of the parent, so the immediate parent must be given a width and height */}
              <Center
                minWidth="full"
                minHeight="100vh"
                borderWidth="2px"
                borderColor="white"
              >
                <BoosterRocketContainer />
              </Center>
              <Center minWidth="full" minHeight="100vh">
                <ShuttleContainer />
              </Center>
              <Center minWidth="full" minHeight="100vh">
                <SaturnVContainer />
              </Center>
            </Grid>
          </Center>
        </Container>
      )}
      {artefactGroup === 2 && (
        <Container minWidth="full" minHeight="100vh">
          {/* Responsive grid - 1 column for small mobile, 2 for small-medium laptop screens, 3 for larger desktops */}
          <Center minWidth="full">
            <Grid
              minWidth="full"
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
            >
              {/* Canvas model containers take up the full height and width of the parent, so the immediate parent must be given a width and height */}
              <Center minWidth="full" minHeight="100vh">
                <BoosterRocketContainer />
              </Center>
              <Center minWidth="full" minHeight="100vh">
                <BoosterRocketContainer />
              </Center>
              <Center minWidth="full" minHeight="100vh">
                <BoosterRocketContainer />
              </Center>
            </Grid>
          </Center>
        </Container>
      )}
      {artefactGroup === 3 && (
        <Container minWidth="full" minHeight="100vh">
          {/* Responsive grid - 1 column for small mobile, 2 for small-medium laptop screens, 3 for larger desktops */}
          <Center minWidth="full">
            <Grid
              minWidth="full"
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
            >
              {/* Canvas model containers take up the full height and width of the parent, so the immediate parent must be given a width and height */}
              <Center minWidth="full" minHeight="100vh">
                <ShuttleContainer />
              </Center>
              <Center minWidth="full" minHeight="100vh">
                <ShuttleContainer />
              </Center>
              <Center minWidth="full" minHeight="100vh">
                <ShuttleContainer />
              </Center>
            </Grid>
          </Center>
        </Container>
      )}

      {/* Top bar navigation */}
      <Box pos="fixed" top="0" minWidth="full" zIndex={20}>
        <Center>
          <Text fontSize={["lg", "xl", "xl"]} textColor="white" my="6">
            Rockets and Shuttles
          </Text>
        </Center>
      </Box>

      {/* Bottom Navigation */}
      <Container pos="fixed" bottom="0" minWidth="full" zIndex={20} p="4">
        <Center>
          <Grid minWidth="full" templateColumns={["repeat(3, 1fr)"]} my="6">
            <Center>
              <Button
                ref={tutorialRef}
                onClick={tutorialDrawerOnOpen}
                width="auto"
              >
                <QuestionOutlineIcon w={6} h={6} />
                {isMobileScreen && <p>&nbsp;Tutorial</p>}
              </Button>
            </Center>
            <Center>
              <Button onClick={modalNavOnOpen} width="auto">
                <Search2Icon w={6} h={6} />
                {isMobileScreen && <p>&nbsp;Navigation</p>}
              </Button>
            </Center>
            <Center>
              <Button ref={menuRef} onClick={menuDrawerOnOpen} width="auto">
                <HamburgerIcon w={6} h={6} />
                {isMobileScreen && <p>&nbsp;Main Menu</p>}
              </Button>
            </Center>
          </Grid>
        </Center>
      </Container>

      {/* Drawers */}
      {/* Tutorial */}
      <Drawer
        isOpen={tutorialDrawerIsOpen}
        placement="left"
        onClose={tutorialDrawerOnClose}
        finalFocusRef={tutorialRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Tutorial</DrawerHeader>

          <DrawerBody>
            <p>
              Click on each of the models to open more information the artefacts
              they represent. Then, when you are finished, press escape, click
              the cross or anywhere outside the information box to return to the
              model screen.
            </p>
            <br />
            <p>
              If you wish to move to a different scene containing a new set of
              artefacts, cycle through the carousel below and click on the boxes
              to change scene.
            </p>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={tutorialDrawerOnClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Main Menu */}
      <Drawer
        isOpen={menuDrawerIsOpen}
        placement="right"
        onClose={menuDrawerOnClose}
        finalFocusRef={menuRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Main Menu</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={menuDrawerOnClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Modals */}
      {/* Navigation grid */}
      <Modal
        isOpen={modalNavIsOpen}
        onClose={modalNavOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Artefact Navigation</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>

          {/* Body contains a grid of navigation boxes, which are mapped from the artefactNavigations object array const */}
          <ModalBody>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gridGap="2rem"
            >
              {artefactNavigations.map((artefactNavigation) => (
                <Button
                  key={artefactNavigation.id}
                  onClick={() => {
                    setArtefactGroup(artefactNavigation.id);
                    modalNavOnClose();
                  }}
                  size="lg"
                >
                  <Box position="relative" _hover={{ opacity: "75%" }}>
                    {/* <Image
                      w="100%"
                      borderRadius="md"
                      src={artefactNavigation.background}
                      alt="museum image"
                    ></Image> */}
                    <Text
                      fontSize="2xl"
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                    >
                      {artefactNavigation.name}
                    </Text>
                  </Box>
                </Button>
              ))}
            </Grid>
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={modalNavOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
};

// Each model is contained within it's own function.
// The function consists of a Canvas component, with a pre-set OrbitControls, Lights and Suspense loader.
// The models themselves are stored in a separate component file and thus must first be imported into the overall model container component

function BoosterRocketContainer() {
  const cameraProps = {
    fov: 75,
    near: 10,
    far: 1000,
    position: [0, 0, 100],
  };
  const {
    isOpen: boosterDrawerIsOpen,
    onOpen: boosterDrawerOnOpen,
    onClose: boosterDrawerOnClose,
  } = useDisclosure();
  return (
    <>
      <Canvas colorManagement camera={cameraProps}>
        <OrbitControls
          // enableZoom={false}
          minDistance={60}
          maxDistance={100}
          enablePan={true}
          enableRotate={true}
        />
        <Lights />
        <Suspense fallback={<Loader />}>
          <A11y
            role="button"
            focusCall={() => console.log("focused the crocket")}
            actionCall={() => console.log("clicked the crocket")}
            description="A rotating orange rocket with two booster engines, click to open more information"
            zIndexRange={[2, 1]}
          >
            <BoosterRocket
              position={[0, -20, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </A11y>
          <A11y
            role="button"
            actionCall={() => console.log("clicked the boosters")}
            description="Click to learn more information about the booster engines"
          >
            <Html position={[9, 0, 0]} zIndexRange={[1, 0]}>
              <Button onClick={boosterDrawerOnOpen}>
                <QuestionOutlineIcon
                  w={40}
                  h={40}
                  borderWidth="0px"
                  borderRadius="50px"
                  // borderColor="white"
                  color="white"
                  background="black"
                />
              </Button>
            </Html>
          </A11y>
          <A11y
            role="button"
            actionCall={() => console.log("clicked the boosters")}
            description="Click to learn more information about the booster engines"
            zIndexRange={[2, 1]}
          >
            <Html position={[-5, 40, 0]} zIndexRange={[1, 0]}>
              <Button onClick={boosterDrawerOnOpen}>
                <QuestionOutlineIcon
                  w={40}
                  h={40}
                  borderWidth="0px"
                  borderRadius="50px"
                  // borderColor="white"
                  color="white"
                  background="black"
                />
              </Button>
            </Html>
          </A11y>
        </Suspense>
      </Canvas>
      <A11yAnnouncer />

      <Modal
        isOpen={boosterDrawerIsOpen}
        onClose={boosterDrawerOnClose}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            non unde soluta earum suscipit nobis debitis, aspernatur sit totam
            voluptatibus minus id placeat enim obcaecati repellat quaerat
            deleniti facilis ea?
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={boosterDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}

function ShuttleContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 100],
  };
  const {
    isOpen: shuttleDrawerIsOpen,
    onOpen: shuttleDrawerOnOpen,
    onClose: shuttleDrawerOnClose,
  } = useDisclosure();
  return (
    <>
      <Canvas colorManagement camera={cameraProps} zIndex="1">
        <OrbitControls
          // enableZoom={false}
          minZoom={Math.PI / 4}
          maxZoom={Math.PI / 4}
          enablePan={true}
          enableRotate={true}
        />
        <Lights />
        <Suspense fallback={<Loader />}>
          <A11y>
            <ShuttleModel
              position={[0, -10, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </A11y>
          <Environment preset="city" />

          <A11y
            role="button"
            actionCall={() => console.log("clicked the boosters")}
            description="Click to learn more information about the booster engines"
            zIndexRange={[2, 1]}
          >
            <Html position={[0, 5, 15]} zIndexRange={[1, 0]}>
              <Button onClick={shuttleDrawerOnOpen}>
                <QuestionOutlineIcon
                  w={40}
                  h={40}
                  borderWidth="0px"
                  borderRadius="50px"
                  // borderColor="white"
                  color="white"
                  background="black"
                />
              </Button>
            </Html>
          </A11y>
          <A11y
            role="button"
            actionCall={() => console.log("clicked the boosters")}
            description="Click to learn more information about the booster engines"
            zIndexRange={[2, 1]}
          >
            <Html position={[5, 0, -15]} zIndexRange={[1, 0]}>
              <Button onClick={shuttleDrawerOnOpen}>
                <QuestionOutlineIcon
                  w={40}
                  h={40}
                  borderWidth="0px"
                  borderRadius="50px"
                  // borderColor="white"
                  color="white"
                  background="black"
                />
              </Button>
            </Html>
          </A11y>
        </Suspense>
      </Canvas>
      <A11yAnnouncer />

      <Modal
        isOpen={shuttleDrawerIsOpen}
        onClose={shuttleDrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Shuttle Rockets</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            non unde soluta earum suscipit nobis debitis, aspernatur sit totam
            voluptatibus minus id placeat enim obcaecati repellat quaerat
            deleniti facilis ea?
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={shuttleDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}

function SaturnVContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 100],
  };
  const {
    isOpen: saturnVDrawerIsOpen,
    onOpen: saturnVDrawerOnOpen,
    onClose: saturnVDrawerOnClose,
  } = useDisclosure();
  const [buttonHover, setButtonHover] = useState(false);
  return (
    <>
      <Canvas colorManagement camera={cameraProps} zIndex="1">
        <OrbitControls
          // enableZoom={false}
          minZoom={Math.PI / 4}
          maxZoom={Math.PI / 4}
          enablePan={true}
          enableRotate={true}
        />
        <Lights />
        <Suspense fallback={<Loader />}>
          <A11y
            role="button"
            focusCall={() => console.log("focused the crocket")}
            actionCall={() => console.log("clicked the crocket")}
            description="A rotating orange rocket with two booster engines, click to open more information"
            zIndexRange={[2, 1]}
          >
            <SaturnV position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]} />
          </A11y>
          <Environment preset="city" />

          {/* <A11y
            role="button"
            onClick={saturnVDrawerOnOpen}
            actionCall={() => console.log("clicked the boosters")}
            description="Click to learn more information about the booster engines"
            zIndexRange={[0, 1]}
            position={[0, 0, 0]}
          > */}
          <Html zIndexRange={[1, 0]} position={[5, 0, 0]}>
            <Button
              onClick={saturnVDrawerOnOpen}
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
          {/* </A11y> */}
          {/* <A11y
            role="button"
            onClick={saturnVDrawerOnOpen}
            actionCall={() => console.log("clicked the boosters")}
            description="Click to learn more information about the booster engines"
            zIndexRange={[0, 1]}
            position={[0, 30, 5]}
          > */}
          <Html zIndexRange={[1, 0]} position={[0, 30, 5]}>
            <Button onClick={saturnVDrawerOnOpen}>
              <QuestionOutlineIcon
                w={40}
                h={40}
                borderWidth="0px"
                borderRadius="50px"
                // borderColor="white"
                color="white"
                background="black"
              />
            </Button>
          </Html>
          {/* </A11y> */}
        </Suspense>
      </Canvas>
      <A11yAnnouncer />

      <Modal
        isOpen={saturnVDrawerIsOpen}
        onClose={saturnVDrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">saturnV Rockets</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            non unde soluta earum suscipit nobis debitis, aspernatur sit totam
            voluptatibus minus id placeat enim obcaecati repellat quaerat
            deleniti facilis ea?
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={saturnVDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
