import React from "react";
import { exhibitions } from "../exhibition_data";
import { Box, Container, Grid, Image, Text, Center } from "@chakra-ui/react";

import MuseumMapTest from "../components/iconComponent";
import MuseumMap from "../components/museumMap";

export default function Homepage({ setApp }) {
  return (
    <Container minWidth="full" minHeight="100vh" backgroundColor="black">
      <Container maxWidth="container.xl">
        <Center py="12">
          <Text fontSize={["xl", "2xl", "4xl"]} textColor="white">
            Virtual Museum Webapp Prototype
          </Text>
        </Center>

        <Text fontSize={["md", "md", "lg"]} pt={6} textColor="white">
          This React based prototype project primarily utilises
          React-Three-Fiber, Three JS and React Three Fiber to display a series
          of 3D, interactible objects.
          <br />
          <br />
          It is an exploration of how digital spaces could be used to satisfy
          museum-goers who might not otherwise be able to travel to and
          experience a physical museum.
          <br />
          <br />
          The project differentiates itself from competing museum webapps by
          emphasising the models themselves rather than the museum's structure -
          as is the case with many alternatives. While the project is heavily
          limited by a lack of photorealistic images due to a reliance on
          royalty free Sketchfab models, it serves as a proof of concept and a
          stepping stone for potential future React based museum webapps.
        </Text>

        <Text fontSize={["lg", "xl", "xl"]} textColor="white" pt="8">
          Instructions:
        </Text>

        <Text fontSize={["md", "md", "lg"]} textColor="white">
          Click on Exhibition 1 to view the current up-to-date version of an
          example exhibit. <br />
          Once inside, try interacting with the artefacts to see them up close
          and click the information points to learn more about what they
          represent.
          <br />
        </Text>
      </Container>

      <Container maxWidth="container.xl">
        <Center>
          <Text fontSize={["lg", "xl", "2xl"]} py={16} textColor="white">
            Interactive Exhibition Site Map:
          </Text>
        </Center>

        {/* <MuseumMapTest /> */}
        <Container maxWidth="container.md" py={6}>
          <MuseumMap />
        </Container>
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
