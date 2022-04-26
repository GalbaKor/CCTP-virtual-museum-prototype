// the homepage for the project. Mainly uses inline css styling alongside Chakra UI components.
// A custom made, interactable SVG map is imported for navigation between exhibitions

import React from "react";
// import { exhibitions } from "../exhibition_data";
// import { Box, Grid, Image } from "@chakra-ui/react";
import {
  Container,
  Text,
  Center,
  Grid,
  Icon,
  Link,
  Divider,
} from "@chakra-ui/react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import MuseumMap from "../components/museumMap";
import svgBackground from "../space_exhibition_assets/endless-constellation.svg";

// export Homepage component
export default function Homepage() {
  return (
    // Main container, width and heigh set to the whole screen
    // generic museum image used as a background
    <Container
      minWidth="full"
      minHeight="100vh"
      backgroundColor="black"
      padding={0}
      style={{
        backgroundImage: `url(${svgBackground})`,
      }}
    >
      {/* Secondary inner container for the remaining content */}
      <Container maxWidth="container.xl" py={6}>
        <Divider />
        {/* Inner container for the title banner, text is centered */}
        <Container py="12" minWidth="full">
          <Center>
            <Text fontSize={["xl", "2xl", "4xl"]} textColor="white">
              Systeseum
            </Text>
          </Center>
          <Center>
            <Text fontSize={["md", "lg", "xl"]} textColor="white">
              A digital museum webapp prototype
            </Text>
          </Center>
        </Container>

        <Divider />

        <Container maxWidth="container.xl" pt={6}>
          <Center>
            <Text fontSize={["lg", "xl", "2xl"]} textColor="white">
              Interactive Exhibition Site Map:
            </Text>
          </Center>
          <Container maxWidth="container.md" py={6}>
            {/* MuseumMap imported from the component folder */}
            <MuseumMap />
          </Container>
        </Container>

        <Container maxWidth="container.lg">
          <Text fontSize={["md", "md", "lg"]} p={6} textColor="white">
            This React based prototype project primarily utilises
            React-Three-Fiber, Three JS and React Three Fiber to display a
            series of 3D, interactible objects.
            <br />
            <br />
            It is an exploration of how digital spaces could be used to satisfy
            museum-goers who might not otherwise be able to travel to and
            experience a physical museum. Moreover, traditional museums are less
            likely to contain artefacts that were created digitally such as
            assets from science fiction media. A digital museum has the
            potential to remove such stigma and entertain a wider diversity of
            people.
            <br />
            <br />
            Initial user and literature research suggested that competing
            webapps often make excessive use of nauseating and unnecessary
            animations while simaltaneously remaining too confined to a physical
            location. On the other hand, some users enjoyed using digital
            museums to trial exhibits and plan out routes through the museum's
            floor map before attending the physical site. This inspired research
            and implementation of a SVG based interactive floor map which could
            be used to better connect a physical and digital museum from the
            same stakeholder.
            <br />
            <br />
            The project differentiates itself from competing museum webapps by
            emphasising the models themselves rather than the museum's structure
            - as is the case with many alternatives. While the project is
            heavily limited by a lack of photorealistic images due to a reliance
            on royalty free Sketchfab models, it serves as a proof of concept
            and a stepping stone for potential future React based museum
            webapps.
          </Text>
        </Container>

        <Container
          pt={12}
          textColor="white"
          maxWidth="container.lg"
          minWidth="full"
        >
          <Center>
            <Grid templateColumns={"repeat(3, 1fr)"}>
              <Center>
                <Link href="https://camtebsmall.com/" target="_blank">
                  My Online Portfolio
                </Link>
              </Center>
              <Center>
                <Icon as={AiOutlineCopyrightCircle} />
                &nbsp;Cameron Tebbenham-Small 2022
              </Center>
              <Center>
                <Link
                  href="https://github.com/GalbaKor/CCTP-virtual-museum-prototype"
                  target="_blank"
                >
                  Github Source
                </Link>
              </Center>
            </Grid>
          </Center>
        </Container>
      </Container>

      {/* Grid based container previously used to navigate between content */}

      {/* <Container maxWidth="container.xl" py="10">
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
                <Center h="2rem">
                  <Text
                    fontSize="2xl"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    {exhibition.title}
                  </Text>
                </Center>
              </Box>
            </a>
          ))}
        </Grid>
      </Container> */}
    </Container>
  );
}
