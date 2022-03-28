import React from "react";
import { exhibitions } from "../exhibition_data";
import { Box, Container, Grid, Image, Text, Center } from "@chakra-ui/react";
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
          experience a physical museum. Moreover, traditional museums are less
          likely to contain artefacts that were created digitally such as assets
          from science fiction media. A digital museum has the potential to
          remove such stigma and entertain a wider diversity of people.
          <br />
          <br />
          Initial user and literature research suggested that competing webapps
          often make excessive use of nauseating and unnecessary animations
          while simaltaneously remaining too confined to a physical location. On
          the other hand, some users enjoyed using digital museums to trial
          exhibits and plan out routes through the museum's floor map before
          attending the physical site. This inspired research and implementation
          of a SVG based interactive floor map which could be used to better
          connect a physical and digital museum from the same stakeholder.
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
        <Center>
          <Text fontSize={["lg", "xl", "2xl"]} py={16} textColor="white">
            Exhibition list (only first one works):
          </Text>
        </Center>
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
              key={exhibition.key}
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
