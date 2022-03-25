import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import { FaHome, FaScroll, FaMapMarkedAlt } from "react-icons/fa";
{
  /* Main Menu */
}
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
      <List spacing={3}>
        <ListItem>
          <Link as={Navigate} to="/home">
            <ListIcon as={FaHome} color="black.500" />
            Home Page
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={FaMapMarkedAlt} color="black.500" />
          Museum Exhibition Map
        </ListItem>
        <ListItem>
          <ListIcon as={FaScroll} color="black.500" />
          Exhibitions
        </ListItem>
      </List>
    </DrawerBody>

    <DrawerFooter>
      <Button variant="outline" mr={3} onClose={menuDrawerOnClose}>
        Close
      </Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>;
