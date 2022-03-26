// Main imports
import React, { Suspense, useState, useEffect } from "react";
import {
  OrbitControls,
  Html,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer, A11y } from "@react-three/a11y";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
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
import VenatorClass from "../space_exhibition_assets/venator-class_star_destroyer/Scene";
import ResurgentClass from "../space_exhibition_assets/resurgent-class_star_destroyer/Scene";

import Enterprise from "../space_exhibition_assets/star_trek-enterprise/Scene";
import Dderidex from "../space_exhibition_assets/star_trek-dderidex/Scene";
import Sovereign from "../space_exhibition_assets/star_trek-sovereign/Scene";

import SpaceHelmet from "../space_exhibition_assets/space_helmet_study/Scene";
import SpaceSuit from "../space_exhibition_assets/space_suit/Scene";

// import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

// chakra ui imports
import {
  Box,
  Button,
  Stack,
  Container,
  Grid,
  GridItem,
  Text,
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

import { List, ListItem, ListIcon, Link } from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { useDisclosure, Icon, IconButton, ButtonGroup } from "@chakra-ui/react";

import {
  QuestionOutlineIcon,
  HamburgerIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { FaHome, FaScroll, FaMapMarkedAlt } from "react-icons/fa";

import spaceBackground2 from "../space_exhibition_assets/space_background_2.jpg";
import spaceBackground from "../space_exhibition_assets/space_background.jpg";

import boosterImage1 from "../space_exhibition_assets/booster_rockets_and_fuel_tank/picture-1.jpg";
import boosterImage2 from "../space_exhibition_assets/booster_rockets_and_fuel_tank/picture-2.jpg";

import saturnVImage1 from "../space_exhibition_assets/saturn_v_rocket/picture-1.jpg";
import saturnVImage2 from "../space_exhibition_assets/saturn_v_rocket/picture-2.jpg";

import spaceShuttleImage1 from "../space_exhibition_assets/space_shuttle/picture-1.jpg";
import spaceShuttleImage2 from "../space_exhibition_assets/space_shuttle/picture-2.jpg";

export const Exhibition1 = ({ setApp }) => {
  // mobile queries
  const isMobileScreen = useMediaQuery({
    query: "(min-width: 640px)",
  });

  const navigate = useNavigate();

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

  // const tutorialOnboarding =
  //   localStorage.getItem("tutorialOnboardingVariable") || 1;
  // useEffect(() => {
  //   if (tutorialOnboarding === 1) {
  //   }
  //   console.log("tutorial onboarding is " + tutorialOnboarding);
  // }, [tutorialOnboarding]);

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
    {
      id: 4,
      name: "Astronauts",
      background: "https://via.placeholder.com/450",
    },
    {
      id: 5,
      name: "Placeholder",
      background: "https://via.placeholder.com/450",
    },
    {
      id: 6,
      name: "Other",
      background: "https://via.placeholder.com/450",
    },
  ];

  // local storage based navigation - either uses the exhibition1CurrentTab variable (which in turn is taken from the artefactNavigations id above) or returns a default value of 1, the starting group.
  const artefactTab = localStorage.getItem("exhibition1CurrentTab") || 1;

  useEffect(() => {
    console.log(localStorage.getItem("exhibition1CurrentTab"));
  }, [artefactTab]);

  // const [artefactGroup, setArtefactGroup] = useState(1);
  // // turns out useEffect wasn't actually necessary, but it's good for debug purposes regardless
  // useEffect(() => {
  //   console.log("Artefact group " + [artefactGroup]);
  // }, [artefactGroup]);

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
      {artefactTab == 1 && (
        <>
          <Box pos="fixed" top="0" minWidth="full" zIndex={20}>
            <Center>
              <Text fontSize={["lg", "xl", "xl"]} textColor="white" my="6">
                Rockets and Shuttles
              </Text>
            </Center>
          </Box>
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
        </>
      )}
      {artefactTab == 2 && (
        <>
          <Box pos="fixed" top="0" minWidth="full" zIndex={20}>
            <Center>
              <Text fontSize={["lg", "xl", "xl"]} textColor="white" my="6">
                Sci-Fi
              </Text>
            </Center>
          </Box>
          <Container minWidth="full" minHeight="100vh">
            {/* Responsive grid - 1 column for small mobile, 2 for small-medium laptop screens, 3 for larger desktops */}
            <Center minWidth="full">
              <Grid
                minWidth="full"
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                ]}
              >
                {/* Canvas model containers take up the full height and width of the parent, so the immediate parent must be given a width and height */}
                <Center minWidth="full" minHeight="100vh">
                  <VenatorContainer />
                </Center>
                <Center minWidth="full" minHeight="100vh">
                  <VictoryContainer />
                </Center>
                <Center minWidth="full" minHeight="100vh">
                  <ResurgentContainer />
                </Center>
              </Grid>
            </Center>
          </Container>
        </>
      )}
      {artefactTab == 3 && (
        <>
          <Box pos="fixed" top="0" minWidth="full" zIndex={20}>
            <Center>
              <Text fontSize={["lg", "xl", "xl"]} textColor="white" my="6">
                Sci-Fi 2
              </Text>
            </Center>
          </Box>
          <Container minWidth="full" minHeight="100vh">
            {/* Responsive grid - 1 column for small mobile, 2 for small-medium laptop screens, 3 for larger desktops */}
            <Center minWidth="full">
              <Grid
                minWidth="full"
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                ]}
              >
                {/* Canvas model containers take up the full height and width of the parent, so the immediate parent must be given a width and height */}
                <Center minWidth="full" minHeight="100vh">
                  <DderidexContainer />
                </Center>
                <Center minWidth="full" minHeight="100vh">
                  <EnterpriseContainer />
                </Center>
                <Center minWidth="full" minHeight="100vh">
                  <SovereignContainer />
                </Center>
              </Grid>
            </Center>
          </Container>
        </>
      )}
      {artefactTab == 4 && (
        <>
          <Box pos="fixed" top="0" minWidth="full" zIndex={20}>
            <Center>
              <Text fontSize={["lg", "xl", "xl"]} textColor="white" my="6">
                Astronauts
              </Text>
            </Center>
          </Box>
          <Container minWidth="full" minHeight="100vh">
            {/* Responsive grid - 1 column for small mobile, 2 for small-medium laptop screens, 3 for larger desktops */}
            <Center minWidth="full">
              <Grid
                minWidth="full"
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                ]}
              >
                {/* Canvas model containers take up the full height and width of the parent, so the immediate parent must be given a width and height */}
                <Center minWidth="full" minHeight="100vh">
                  <SpaceSuitContainer />
                </Center>
                <Center minWidth="full" minHeight="100vh">
                  <SpaceHelmetContainer />
                </Center>
                {/* <Center minWidth="full" minHeight="100vh">
                <SpaceSuitContainer />
              </Center> */}
              </Grid>
            </Center>
          </Container>
        </>
      )}

      {/* Bottom Navigation */}
      <Container pos="fixed" bottom="0" minWidth="full" zIndex={20} p="4">
        <Center>
          <Grid minWidth="full" templateColumns={["repeat(3, 1fr)"]} my="6">
            <Center>
              <Button
                ref={tutorialRef}
                onClick={tutorialDrawerOnOpen}
                width="auto"
                tabIndex={1}
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
        // onClose={() => {
        //   if (localStorage.getItem("tutorialOnboardingVariable") === 1) {
        //     localStorage.setItem("tutorialOnboardingVariable", 0);
        //     tutorialDrawerOnClose();
        //   } else {
        //     tutorialDrawerOnClose();
        //   }
        // }}
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
            <br />
            <p>
              Occasionally, models may take longer to load due to higher levels
              of detail. Please wait for the models to load before interacting
              with the webpage.
            </p>
            <br />
            <br />
            {/* <p>
              If you'd like the tutorial to open when you next load open an
              exhibition, click here to reset the tutorial.
            </p>
            <Button
              onClick={() => {
                if (localStorage.getItem("tutorialOnboardingVariable") === 0) {
                  localStorage.setItem("tutorialOnboardingVariable", 1);
                  tutorialDrawerOnClose();
                } else {
                  tutorialDrawerOnClose();
                }
              }}
            >
              Reset Tutorial
            </Button> */}
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={tutorialDrawerOnClose}
              // onClose={() => {
              //   if (localStorage.getItem("tutorialOnboardingVariable") === 1) {
              //     localStorage.setItem("tutorialOnboardingVariable", 0);
              //     tutorialDrawerOnClose();
              //   } else {
              //     tutorialDrawerOnClose();
              //   }
              // }}
            >
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
          <DrawerBody>
            <Stack spacing={6}>
              {/* Home Page button */}
              <Button
                aria-label="Click to return home"
                onClick={() => navigate("/")}
                textAlign="left"
                width="full"
              >
                <Grid templateColumns="repeat(6, 1fr)" width="full">
                  <GridItem colSpan={2}>
                    <Center height="full">
                      <Icon as={FaHome} width={6} height={6} />
                    </Center>
                  </GridItem>
                  <GridItem colSpan={4} textAlign="left">
                    <p width="full">Home Page</p>
                  </GridItem>
                </Grid>
              </Button>
              {/* Museum Map button */}
              <Button
                aria-label="Click to return home"
                onClick={() => navigate("/")}
                textAlign="left"
                width="full"
              >
                <Grid templateColumns="repeat(6, 1fr)" width="full">
                  <GridItem colSpan={2}>
                    <Center height="full">
                      <Icon as={FaMapMarkedAlt} width={6} height={6} />
                    </Center>
                  </GridItem>
                  <GridItem colSpan={4} textAlign="left">
                    <p width="full">Museum Map</p>
                  </GridItem>
                </Grid>
              </Button>
              {/* Exhibitions button */}
              <Button
                aria-label="Click to return home"
                onClick={() => navigate("/")}
                textAlign="left"
                width="full"
              >
                <Grid templateColumns="repeat(6, 1fr)" width="full">
                  <GridItem colSpan={2}>
                    <Center height="full">
                      <Icon as={FaScroll} width={6} height={6} />
                    </Center>
                  </GridItem>
                  <GridItem colSpan={4} textAlign="left">
                    <p width="full">Exhibitions</p>
                  </GridItem>
                </Grid>
              </Button>
            </Stack>
          </DrawerBody>
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
          {/* Could experiment using Chakra's link overlay component */}
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
                    // setArtefactGroup(artefactNavigation.id);
                    localStorage.setItem(
                      "exhibition1CurrentTab",
                      artefactNavigation.id
                    );
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

// Model group 1
function BoosterRocketContainer() {
  const cameraProps = {
    fov: 75,
    near: 10,
    far: 1000,
    position: [0, 0, 100],
  };

  const {
    isOpen: booster1DrawerIsOpen,
    onOpen: booster1DrawerOnOpen,
    onClose: booster1DrawerOnClose,
  } = useDisclosure();
  const {
    isOpen: booster2DrawerIsOpen,
    onOpen: booster2DrawerOnOpen,
    onClose: booster2DrawerOnClose,
  } = useDisclosure();

  // const {
  //   isOpen: booster2DrawerIsOpen,
  //   onOpen: booster2DrawerOnOpen,
  //   onClose: booster2DrawerOnClose,
  // } = useDisclosure();

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
              <Button onClick={booster1DrawerOnOpen}>
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
              <Button onClick={booster2DrawerOnOpen}>
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

      {/* Modal 1 */}
      <Modal
        isOpen={booster1DrawerIsOpen}
        onClose={booster1DrawerOnClose}
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
            A booster rocket (or engine) is either the first stage of a
            multistage launch vehicle, or else a shorter-burning rocket used in
            parallel with longer-burning sustainer rockets to augment the space
            vehicle's takeoff thrust and payload capability.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Image
                  src={boosterImage1}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A space rocket with orange booster engines behind some trees"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
              </Box>
            </Center>
            Boosters are traditionally necessary to launch spacecraft into low
            Earth orbit (absent a single-stage-to-orbit design), and are
            especially important for a space vehicle to go beyond Earth
            orbit.[citation needed] The booster is dropped to fall back to Earth
            once its fuel is expended, a point known as booster engine cut-off
            (BECO).
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={booster1DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>

      {/* Modal 2 */}
      <Modal
        isOpen={booster2DrawerIsOpen}
        onClose={booster2DrawerOnClose}
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
            A liquid rocket booster (LRB) uses liquid fuel and oxidizer to give
            a liquid-propellant or hybrid rocket an extra boost at take-off,
            and/or increase the total payload that can be carried. It is
            attached to the side of a rocket. Unlike solid rocket boosters, LRBs
            can be throttled down if the engines are designed to allow it, and
            can be shut down safely in an emergency for additional escape
            options in human spaceflight.
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Image
                  src={boosterImage2}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A white space rocket beginning its launch"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
              </Box>
            </Center>
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={booster2DrawerOnClose}>Close</Button>
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
    isOpen: shuttle1DrawerIsOpen,
    onOpen: shuttle1DrawerOnOpen,
    onClose: shuttle1DrawerOnClose,
  } = useDisclosure();
  const {
    isOpen: shuttle2DrawerIsOpen,
    onOpen: shuttle2DrawerOnOpen,
    onClose: shuttle2DrawerOnClose,
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
              <Button onClick={shuttle1DrawerOnOpen}>
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
              <Button onClick={shuttle2DrawerOnOpen}>
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
              <ModalHeader minWidth="full">Booster Rockets</ModalHeader>
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
                <Image
                  src={spaceShuttleImage1}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A space rocket with orange booster engines behind some trees"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
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
              <ModalHeader minWidth="full">Booster Rockets</ModalHeader>
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
              <Box boxSize="xl" height="full" py={4}>
                <Image
                  src={spaceShuttleImage2}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A white space rocket beginning its launch"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
              </Box>
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

function SaturnVContainer() {
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
              onClick={saturnV1DrawerOnOpen}
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
            <Button onClick={saturnV2DrawerOnOpen}>
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
              <ModalHeader minWidth="full">Booster Rockets</ModalHeader>
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
                <Image
                  src={saturnVImage1}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A space rocket with orange booster engines behind some trees"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
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
              <ModalHeader minWidth="full">Booster Rockets</ModalHeader>
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
                <Image
                  src={saturnVImage2}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A white space rocket beginning its launch"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
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

// Model group 2
function VenatorContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 150],
  };
  const {
    isOpen: venatorDrawerIsOpen,
    onOpen: venatorDrawerOnOpen,
    onClose: venatorDrawerOnClose,
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
            <VenatorClass
              position={[0, -20, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
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
              onClick={venatorDrawerOnOpen}
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
            <Button onClick={venatorDrawerOnOpen}>
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
        isOpen={venatorDrawerIsOpen}
        onClose={venatorDrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Venator </ModalHeader>
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
              <Button onClick={venatorDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}

function VictoryContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 150],
  };
  const {
    isOpen: victoryDrawerIsOpen,
    onOpen: victoryDrawerOnOpen,
    onClose: victoryDrawerOnClose,
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
            <VictoryClass
              position={[0, -20, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
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
              onClick={victoryDrawerOnOpen}
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
            <Button onClick={victoryDrawerOnOpen}>
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
        isOpen={victoryDrawerIsOpen}
        onClose={victoryDrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Victory</ModalHeader>
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
              <Button onClick={victoryDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}

function ResurgentContainer() {
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
            <ResurgentClass
              position={[0, 0, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
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
            <Button onClick={resurgentDrawerOnOpen}>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            non unde soluta earum suscipit nobis debitis, aspernatur sit totam
            voluptatibus minus id placeat enim obcaecati repellat quaerat
            deleniti facilis ea?
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

// Model group 3
function DderidexContainer() {
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
            <Dderidex
              position={[0, 0, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
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
            <Button onClick={dderidexDrawerOnOpen}>
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
              <ModalHeader minWidth="full">dderidex</ModalHeader>
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
              <Button onClick={dderidexDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}

function EnterpriseContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 130],
  };
  const {
    isOpen: enterpriseDrawerIsOpen,
    onOpen: enterpriseDrawerOnOpen,
    onClose: enterpriseDrawerOnClose,
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
            <Enterprise
              position={[0, 0, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
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
              onClick={enterpriseDrawerOnOpen}
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
            <Button onClick={enterpriseDrawerOnOpen}>
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
        isOpen={enterpriseDrawerIsOpen}
        onClose={enterpriseDrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">enterprise</ModalHeader>
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
              <Button onClick={enterpriseDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}

function SovereignContainer() {
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
            <Sovereign
              position={[0, 0, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
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
            <Button onClick={sovereignDrawerOnOpen}>
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
              <ModalHeader minWidth="full">sovereign</ModalHeader>
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
              <Button onClick={sovereignDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}

// Model group 4
function SpaceSuitContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 100],
  };
  const {
    isOpen: spaceSuitDrawerIsOpen,
    onOpen: spaceSuitDrawerOnOpen,
    onClose: spaceSuitDrawerOnClose,
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
            <SpaceSuit position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
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
              onClick={spaceSuitDrawerOnOpen}
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
            <Button onClick={spaceSuitDrawerOnOpen}>
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
        isOpen={spaceSuitDrawerIsOpen}
        onClose={spaceSuitDrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">spaceSuit</ModalHeader>
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
              <Button onClick={spaceSuitDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}

function SpaceHelmetContainer() {
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
            <SpaceHelmet
              position={[0, -20, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
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
            <Button onClick={spaceHelmetDrawerOnOpen}>
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
              <ModalHeader minWidth="full">spaceHelmet</ModalHeader>
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
              <Button onClick={spaceHelmetDrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}
