// Main imports
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

// Model Container imports
import BoosterRocketContainer from "../space_exhibition_assets/booster_rockets_and_fuel_tank/boosterRocketContainer";
import ShuttleContainer from "../space_exhibition_assets/space_shuttle/shuttleContainer";
import SaturnVContainer from "../space_exhibition_assets/saturn_v_rocket/saturnVContainer";

import ResurgentContainer from "../space_exhibition_assets/resurgent-class_star_destroyer/resurgentContainer";
import VenatorContainer from "../space_exhibition_assets/venator-class_star_destroyer/venatorContainer";
import VictoryContainer from "../space_exhibition_assets/victory-class_star_destroyer/victoryContainer";

import SpaceSuitContainer from "../space_exhibition_assets/space_suit/spaceSuitContainer";
import SpaceHelmetContainer from "../space_exhibition_assets/astronaut_helmet/spaceHelmetContainer";

import DderidexContainer from "../space_exhibition_assets/star_trek-dderidex/dDeridexContainer";
import EnterpriseContainer from "../space_exhibition_assets/star_trek-enterprise/enterpriseContainer";
import SovereignContainer from "../space_exhibition_assets/star_trek-sovereign/sovereignContainer";

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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";

// chakra ui and react icons
import {
  QuestionOutlineIcon,
  HamburgerIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { FaHome, FaScroll, FaMapMarkedAlt } from "react-icons/fa";

// background image import
import spaceBackground2 from "../space_exhibition_assets/space_background_2.jpg";

// export the exhibition component
export const Exhibition1 = () => {
  // mobile queries
  const isMobileScreen = useMediaQuery({
    query: "(min-width: 640px)",
  });

  // set up navigation variable
  const navigate = useNavigate();

  // Modal and Drawer variables
  // isOpen, onOpen and onClose are remapped in order to use "useDisclosure" more than one time

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
    // {
    //   id: 5,
    //   name: "Placeholder",
    //   background: "https://via.placeholder.com/450",
    // },
    // {
    //   id: 6,
    //   name: "Placeholder",
    //   background: "https://via.placeholder.com/450",
    // },
  ];

  // local storage based navigation - either uses the exhibition1CurrentTab variable (which in turn is taken from the artefactNavigations id above) or returns a default value of 1, the starting group.
  // This means that if the user exits their browser or needs to refresh to reset the models, it will load the group that they were last viewing
  const artefactTab = localStorage.getItem("exhibition1CurrentTab") || 1;

  // debugging tool
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
      {/* Each model is contained within it's own function.
      The function consists of a Canvas component, with a pre-set OrbitControls, Lights and Suspense loader. 
      The models themselves are stored in a separate
      component file to prevent file bloat and thus must first be imported into the overall model
      container component */}
      {/* When the user clicks a navigation button, local storage variable is changed and loads the associated group of models */}
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
                {/* Canvas model containers take up the full height and width of the parent element, so the immediate parent must be given a width and height */}
                <Center minWidth="full" minHeight="100vh">
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
      {/* Bottom buttons */}
      {/* Contains the tutorial, navigation and main menu buttons */}
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
                {isMobileScreen && <p>&nbsp;Model navigation</p>}
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

      {/* DRAWERS */}
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
              Click on each of the information buttons to learn about the
              artefacts. Then, when you are finished, press escape, click the
              cross or anywhere outside the information box to return to the
              scene.
            </p>
            <br />
            <p>
              If you wish to move to a different scene containing a new set of
              artefacts, click the navigation button and select one of the
              available options.
            </p>
            <br />
            <p>
              Occasionally, models and images may take longer to load due to
              higher levels of detail. Please wait for the models to load before
              interacting with the webpage.
            </p>
            <br />
            <br />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={tutorialDrawerOnClose}
              // Tried an onboarding feature but didn't have time to fully implement

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
                    <p width="full">Example Button</p>
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
                    <p width="full">Example Button</p>
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

      {/* MODALS */}
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
            {/* Grid size changes depending on screen size */}
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gridGap="2rem"
            >
              {/* map the artefactNavigations object for better scalability */}
              {artefactNavigations.map((artefactNavigation) => (
                <Button
                  key={artefactNavigation.id}
                  // when clicked, set a local storage variable equal to that group's id
                  onClick={() => {
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
