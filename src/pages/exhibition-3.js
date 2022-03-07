// Main imports
import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { A11yAnnouncer, A11y } from "@react-three/a11y";

// Component imports
import { Lights } from "../components/lights";
import { Loader } from "../components/loader";
import { exhibitions } from "../exhibition_data";

// Model imports
import BoosterRocket from "../space_exhibition_assets/booster_rockets_and_fuel_tank/Scene";
import N1Rocket from "../space_exhibition_assets/n1_rocket/Scene";
import ShuttleModel from "../space_exhibition_assets/space_shuttle/Scene";
import SaturnV from "../space_exhibition_assets/saturn_v_rocket/Scene";

// import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

// chakra ui imports
import {
  Box,
  Button,
  Container,
  Grid,
  Image,
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";

export const Exhibition3 = ({ setApp }) => {
  const [open, setOpen] = React.useState(false);
  const [tutorial, setTutorial] = React.useState(false);

  const {
    isOpen: modalNavIsOpen,
    onOpen: modalNavOnOpen,
    onClose: modalNavOnClose,
  } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container minWidth="full" backgroundColor="black">
        <Container maxWidth="container.xl">
          <Button onClick={modalNavOnOpen} mt="8">
            Navigate Scenes
          </Button>
          {/* <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              _hover={{ opacity: "60%" }}
              variant=""
              fontSize="3rem"
              color="white"
              onClick={modalNavOnOpen}
            />
            <MenuList>
              <MenuItem icon={<AddIcon />}>New Tab</MenuItem>
              <MenuItem icon={<ExternalLinkIcon />}>New Window</MenuItem>
              <MenuItem icon={<RepeatIcon />}>Open Closed Tab</MenuItem>
              <MenuItem icon={<EditIcon />}>Open File...</MenuItem>
            </MenuList>
          </Menu> */}
          <Center py="8">
            <Text fontSize={["lg", "xl", "xl"]} textColor="white" mt="-24">
              Rockets and Boosters
            </Text>
          </Center>
        </Container>

        <Container minWidth="full">
          {/* Responsive grid - 1 column for small mobile, 2 for small-medium laptop screens, 3 for larger desktops */}
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
            // gridGap="2rem"
          >
            <Center minWidth="full" minHeight="100vh">
              <N1RocketContainer />
            </Center>
            <Center minWidth="full">
              <N1RocketContainer />
            </Center>
            <Center minWidth="full">
              <N1RocketContainer />
            </Center>

            {/* <Box maxWidth={["xs", "xs", "lg", "md"]} minHeight="90vh">
              <N1RocketContainer />
            </Box>
            <Box maxWidth={["xs", "xs", "lg", "md"]} minHeight="90vh">
              <N1RocketContainer />
            </Box> */}
          </Grid>
        </Container>

        <Modal
          isOpen={modalNavIsOpen}
          onClose={modalNavOnClose}
          size="4xl"
          isCentered
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>modalNavOnOpen Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <N1RocketContainer /> */}
              <Grid
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                ]}
                gridGap="2rem"
              >
                {exhibitions.map((exhibition) => (
                  <a
                    href={exhibition.link}
                    key={exhibition.image}
                    onClick={() => setApp(true)}
                  >
                    <Box position="relative" _hover={{ opacity: "75%" }}>
                      <Image
                        w="100%"
                        borderRadius="md"
                        src={exhibition.image}
                        alt="museum image"
                      ></Image>
                      <Text
                        fontSize="2xl"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                      >
                        <Center h="2rem">{exhibition.title}</Center>
                      </Text>
                    </Box>
                  </a>
                ))}
                {exhibitions.map((exhibition) => (
                  <a
                    href={exhibition.link}
                    key={exhibition.image}
                    onClick={() => setApp(true)}
                  >
                    <Box position="relative" _hover={{ opacity: "75%" }}>
                      <Image
                        w="100%"
                        borderRadius="md"
                        src={exhibition.image}
                        alt="museum image"
                      ></Image>
                      <Text
                        fontSize="2xl"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                      >
                        <Center h="2rem">{exhibition.title}</Center>
                      </Text>
                    </Box>
                  </a>
                ))}
                {exhibitions.map((exhibition) => (
                  <a
                    href={exhibition.link}
                    key={exhibition.image}
                    onClick={() => setApp(true)}
                  >
                    <Box position="relative" _hover={{ opacity: "75%" }}>
                      <Image
                        w="100%"
                        borderRadius="md"
                        src={exhibition.image}
                        alt="museum image"
                      ></Image>
                      <Text
                        fontSize="2xl"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                      >
                        <Center h="2rem">{exhibition.title}</Center>
                      </Text>
                    </Box>
                  </a>
                ))}
              </Grid>
            </ModalBody>

            <ModalFooter>
              <Button onClick={modalNavOnClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

function N1RocketContainer() {
  const [cameraProps, setCameraProps] = useState({
    fov: 75,
    near: 1,
    far: 1000,
    position: [0, 0, 100],
  });
  return (
    <Canvas colorManagement camera={cameraProps}>
      <OrbitControls
        // enableZoom={false}
        minZoom={Math.PI / 4}
        maxZoom={Math.PI / 4}
        enablePan={true}
        enableRotate={true}
      />
      <Lights />
      <Suspense fallback={<Loader />}>
        {/* <N1Rocket
          position={[-20, 0, 0]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          // plan is to call a hook and useState to change the modal content
        /> */}

        <BoosterRocket position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        {/* <SaturnV position={[90, -50, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        <ShuttleModel
          position={[-60, -40, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        /> */}
      </Suspense>
    </Canvas>
  );
}

{
  /* <div className="tutorial-button" onClick={() => setTutorial(true)}>
        <a href="#" className="tutorial-button-link">
          ?
        </a>
      </div> */
}
{
  /* <Modal open={tutorial} onClose={() => setTutorial(false)}>
        <h2 className="modal-title">Tutorial</h2>
        <p>
          Click on each of the models to open more information the artefacts
          they represent. Then, when you are finished, press escape, click the
          cross or anywhere outside the information box to return to the model
          screen.
        </p>
        <p>
          If you wish to move to a different scene containing a new set of
          artefacts, cycle through the carousel below and click on the boxes to
          change scene.
        </p>
      </Modal>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <h2 className="modal-title">Artefact title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          magnam cupiditate, aliquam laborum distinctio non, saepe magni
          laudantium eum deserunt iure dolorem. Sequi id possimus sint in
          ducimus deleniti voluptate explicabo placeat. Incidunt dolor
          architecto, mollitia labore ducimus libero ea quaerat minus quia
          consequatur praesentium quas laboriosam quam illum beatae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit
          tempora eius reprehenderit dignissimos odio incidunt debitis eligendi
          earum deleniti in ea praesentium quaerat atque quam recusandae
          repellat, aliquid minus, placeat quas voluptatum velit doloremque ut.
          At corporis, sit corrupti suscipit aperiam sequi est unde, velit vero
          temporibus delectus possimus?
        </p>
        <div className="modal-image"></div>
        <div className="modal-image"></div>
      </Modal> */
}
