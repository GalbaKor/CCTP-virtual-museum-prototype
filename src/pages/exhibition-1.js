// Main imports
import React, { Suspense, useState, useEffect } from "react";
import { OrbitControls, Html, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { A11yAnnouncer, A11y } from "@react-three/a11y";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

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

import AstronautHelmet from "../space_exhibition_assets/astronaut_helmet/Scene";
import SpaceSuit from "../space_exhibition_assets/space_suit/Scene";

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

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { useDisclosure, Icon } from "@chakra-ui/react";

import {
  QuestionOutlineIcon,
  HamburgerIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { FaHome, FaScroll, FaMapMarkedAlt } from "react-icons/fa";

import spaceBackground2 from "../space_exhibition_assets/space_background_2.jpg";

import boosterImage1 from "../space_exhibition_assets/booster_rockets_and_fuel_tank/picture-1.jpg";
import boosterImage2 from "../space_exhibition_assets/booster_rockets_and_fuel_tank/picture-2.jpg";

import saturnVImage1 from "../space_exhibition_assets/saturn_v_rocket/picture-1.jpg";
import saturnVImage2 from "../space_exhibition_assets/saturn_v_rocket/picture-2.jpg";

import spaceShuttleImage1 from "../space_exhibition_assets/space_shuttle/picture-1.jpg";
import spaceShuttleImage2 from "../space_exhibition_assets/space_shuttle/picture-2.jpg";

import venatorImage1 from "../space_exhibition_assets/venator-class_star_destroyer/picture-1.jpg";
import venatorImage2 from "../space_exhibition_assets/venator-class_star_destroyer/picture-2.jpg";

import victoryImage1 from "../space_exhibition_assets/victory-class_star_destroyer/picture-1.jpg";
import victoryImage2 from "../space_exhibition_assets/victory-class_star_destroyer/picture-2.jpg";

import resurgentImage1 from "../space_exhibition_assets/resurgent-class_star_destroyer/picture-1.jpg";

import dderidexImage1 from "../space_exhibition_assets/star_trek-dderidex/picture-2.jpg";

import enterpriseImage1 from "../space_exhibition_assets/star_trek-enterprise/picture-1.jpg";

import sovereignImage1 from "../space_exhibition_assets/star_trek-sovereign/picture-1.jpg";

import spaceSuitImage1 from "../space_exhibition_assets/space_suit/picture-1.jpg";
import spaceSuitImage2 from "../space_exhibition_assets/space_suit/picture-2.jpg";

import helmetImage1 from "../space_exhibition_assets/astronaut_helmet/picture-2.jpg";

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
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
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

  const [button1Hover, setButton1Hover] = useState(false);
  const [button2Hover, setButton2Hover] = useState(false);

  return (
    <>
      <Canvas colorManagement camera={cameraProps}>
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
            description="Two thin big white rocket engines are attached to a larger orange booster engine."
            tabIndex={0.99}
          >
            <BoosterRocket
              position={[0, -20, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </A11y>

          <Html position={[-5, 40, 0]} zIndexRange={[1, 0]} tabIndex={0.98}>
            <Button
              onClick={booster1DrawerOnOpen}
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

          <Html position={[9, 0, 0]} zIndexRange={[1, 0]} tabIndex={0.97}>
            <Button
              onClick={booster2DrawerOnOpen}
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
        isOpen={booster1DrawerIsOpen}
        onClose={booster1DrawerOnClose}
        size="4xl"
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
              <Box boxSize="2xl" height="full" py={4}>
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
        <Lights />
        <Suspense fallback={<Loader />}>
          <A11y
            role="content"
            description="A white and black space shuttle."
            tabIndex={0.89}
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
        <Lights />
        <Suspense fallback={<Loader />}>
          <A11y role="content" description="A Saturn V rocket." tabIndex={0.79}>
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
        <Lights />
        <Suspense fallback={<Loader />}>
          <A11y
            role="content"
            description="Venator class star destroyer."
            tabIndex={0.99}
            zIndexRange={[2, 1]}
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
                <Image
                  src={venatorImage1}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="Venator fleet battle"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
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
                <Image
                  src={venatorImage2}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="Venator fleet battle"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
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

function VictoryContainer() {
  const cameraProps = {
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 150],
  };
  const {
    isOpen: victory1DrawerIsOpen,
    onOpen: victory1DrawerOnOpen,
    onClose: victory1DrawerOnClose,
  } = useDisclosure();
  const {
    isOpen: victory2DrawerIsOpen,
    onOpen: victory2DrawerOnOpen,
    onClose: victory2DrawerOnClose,
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
        <Lights />
        <Suspense fallback={<Loader />}>
          <A11y
            role="content"
            description="A Victory class star destroyer."
            tabIndex={0.89}
            zIndexRange={[2, 1]}
          >
            <VictoryClass
              position={[0, -20, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
          </A11y>
          <Environment preset="city" />

          <Html zIndexRange={[1, 0]} position={[-25, 0, -50]} tabIndex={0.88}>
            <Button
              onClick={victory1DrawerOnOpen}
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
          <Html zIndexRange={[1, 0]} position={[5, -3, 0]} tabIndex={0.87}>
            <Button
              onClick={victory2DrawerOnOpen}
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
        isOpen={victory1DrawerIsOpen}
        onClose={victory1DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Victory I</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            The Victory I-class Star Destroyer, also known as the Victory
            I-class Destroyer and Victoria I-class Star Destroyer, was a warship
            designed for planetary defense, planetary assault, ground troop
            support, and ship-to-ship combat. It was used by the Galactic
            Republic during the mid-Clone Wars, the Galactic Empire and the
            Corporate Sector during the Galactic Civil War and the Confederation
            during the Second Galactic Civil War.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Image
                  src={victoryImage1}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A space rocket with orange booster engines behind some trees"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
              </Box>
            </Center>
            The Victory I-class Star Destroyer's biggest disadvantage was its
            underpowered LF9 ion engines, which could not produce sufficient
            acceleration to pursue newer and faster ships, allowing them to
            escape ship-to-ship combat. This flaw was rectified in the limited
            Victory II-class, produced shortly before the advent of the Empire.
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={victory1DrawerOnClose}>Close</Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>

      {/* Modal 2 */}
      <Modal
        isOpen={victory2DrawerIsOpen}
        onClose={victory2DrawerOnClose}
        size="2xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent mx="4">
          <Center>
            <Center>
              <ModalHeader minWidth="full">Victory II</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            The Victory II-class Star Destroyer was a class of Star Destroyer
            that was manufactured by Kuat Drive Yards as a successor to the
            original Victory-class Star Destroyer. Initially a life extension
            program, it became the Victory II program which introduced the
            Victory II-class, and sought to fix many problems from the previous
            model including increasing combat performance and longevity. Despite
            the rebuilds, the Victory II was not able to correct all of the
            issues of its predecessor.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Image
                  src={victoryImage2}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A space rocket with orange booster engines behind some trees"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
              </Box>
            </Center>
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button onClick={victory2DrawerOnClose}>Close</Button>
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
          minDistance={30}
          maxDistance={150}
          enablePan={true}
          enableRotate={true}
        />
        <Lights />
        <Suspense fallback={<Loader />}>
          <A11y
            role="content"
            description="A Resurgent class star destroyer."
            tabIndex={0.79}
            zIndexRange={[2, 1]}
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
                <Image
                  src={resurgentImage1}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A space rocket with orange booster engines behind some trees"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
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
            zIndexRange={[2, 1]}
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
                <Image
                  src={dderidexImage1}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A space rocket with orange booster engines behind some trees"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
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
          minDistance={30}
          maxDistance={150}
          enablePan={true}
          enableRotate={true}
        />
        <Lights />
        <Suspense fallback={<Loader />}>
          <A11y
            role="content"
            description="The original Enterprise A."
            tabIndex={0.89}
            zIndexRange={[2, 1]}
          >
            <Enterprise
              position={[0, 0, 0]}
              rotation={[-Math.PI / 2, 0, Math.PI / 8]}
            />
          </A11y>
          <Environment preset="city" />

          <Html zIndexRange={[1, 0]} position={[5, 0, 0]} tabIndex={0.88}>
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
              <ModalHeader minWidth="full">The original Enterprise</ModalHeader>
            </Center>
            <ModalCloseButton />
          </Center>
          <ModalBody>
            The USS Enterprise (NCC-1701) was a 23rd century Federation
            Constitution-class starship operated by Starfleet. It was also the
            first ship to bear the name Enterprise with this registry. Launched
            in 2245, the ship was commanded by Captain Robert April until 2250,
            when command of the ship was turned over to April's First Officer
            Christopher Pike.
            <br />
            Pike's command of the Enterprise ended around 2265 when Pike was
            promoted to fleet captain and command of the ship was turned over to
            Captain James T. Kirk.
            <br />
            <Center>
              <Box boxSize="xl" height="full" py={4}>
                <Image
                  src={enterpriseImage1}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="The original Enterprise, designation 1701"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
              </Box>
            </Center>
            The Enterprise was destroyed over the Genesis Planet in 2285, when
            Kirk activated the ship's auto-destruct sequence to prevent the
            Enterprise from falling into the hands of the Klingons. (Star Trek
            III: The Search for Spock) It was soon replaced by the USS
            Enterprise-A.
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
            zIndexRange={[2, 1]}
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
                <Image
                  src={sovereignImage1}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A space rocket with orange booster engines behind some trees"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
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

// Model group 4
function SpaceSuitContainer() {
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
            zIndexRange={[2, 1]}
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
                <Image
                  src={spaceSuitImage1}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A space rocket with orange booster engines behind some trees"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
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
                <Image
                  src={spaceSuitImage2}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A space rocket with orange booster engines behind some trees"
                  objectFit="cover"
                  borderRadius="xl"
                ></Image>
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
            zIndexRange={[2, 1]}
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
                <Image
                  src={helmetImage1}
                  fallbackSrc="https://via.placeholder.com/300"
                  alt="A space rocket with orange booster engines behind some trees"
                  objectFit="cover"
                  borderRadius="xl"
                  m="auto"
                ></Image>
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
