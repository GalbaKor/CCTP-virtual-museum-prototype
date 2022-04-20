import Enterprise from "./Scene";
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

import enterpriseImage1 from "./picture-1.jpg";

export default function EnterpriseContainer() {
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
            a11yElStyle={({ width: "0px" }, { height: "0px" })}
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
                <Center>
                  <Image
                    src={enterpriseImage1}
                    fallback={<MoonLoader />}
                    alt="The original Enterprise, designation 1701"
                    objectFit="cover"
                    borderRadius="xl"
                  ></Image>
                </Center>
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
