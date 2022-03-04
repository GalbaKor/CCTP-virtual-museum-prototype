import React from "react";
import { exhibitions } from "../exhibition_data";
import { Link } from "react-router-dom";
import { FaAngleDoubleDown } from "react-icons/fa";
import {
  SimpleGrid,
  Box,
  Container,
  Grid,
  Image,
  Text,
  Center,
  Divider,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";

export default function Homepage({ setApp }) {
  return (
    <Container minWidth="full" minHeight="100vh" backgroundColor="black">
      <Container maxWidth="container.xl">
        <Center py="8">
          <Text fontSize={["2xl", "4xl", "6xl"]} textColor="white">
            Virtual Museum Webapp Prototype
          </Text>
        </Center>

        <Text fontSize={["lg", "xl", "2xl"]} textColor="white">
          This React based prototype project utilises React-Three-Fiber and
          React Router to display a series of 3D, interactible objects across a
          series of self contained exhibits.
          <br />
          <br />
          It is an exploration of how digital space could be used to satisfy
          museum-goers who might not otherwise be able to travel to and
          experience a physical museum.
        </Text>

        <Text fontSize={["lg", "xl", "2xl"]} textColor="white" py="8">
          Click on any of the exhibits below to explore them in a virtual scene.{" "}
          <br />
          Once inside, interact with the artefacts to learn more and see them up
          close.
        </Text>
      </Container>

      <Container maxWidth="container.xl">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            _hover={{ opacity: "60%" }}
            variant=""
            fontSize="3rem"
            color="white"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />}>New Tab</MenuItem>
            <MenuItem icon={<ExternalLinkIcon />}>New Window</MenuItem>
            <MenuItem icon={<RepeatIcon />}>Open Closed Tab</MenuItem>
            <MenuItem icon={<EditIcon />}>Open File...</MenuItem>
          </MenuList>
        </Menu>
        <Text fontSize="4xl" textColor="white">
          Exhibits:
        </Text>
      </Container>

      <Container maxWidth="container.xl" py="10">
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
        </Grid>
      </Container>
    </Container>
  );
}
