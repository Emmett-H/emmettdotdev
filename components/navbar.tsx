import React, { useEffect } from "react";
import {
  Box,
  Button,
  ButtonProps,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Link,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HomeIcon,
  MenuIcon,
  InformationCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { default as NextLink } from "next/link";
import { useRouter } from "next/router";

type HeroIconType = (props: React.ComponentProps<"svg">) => JSX.Element;
interface LinkItemProps {
  name: string;
  icon: HeroIconType;
  link: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Overview", icon: HomeIcon, link: "/" },
  { name: "About", icon: InformationCircleIcon, link: "/" },
];

export const NavBar = () => {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure({
    defaultIsOpen: true,
  });

  useEffect(() => {
    onClose();
  }, [router.asPath, onClose]);

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
      bg="deepPurple.500"
      w={{ base: "full", md: "64" }}
      minH={{ base: "24", md: "100vh" }}
      maxH={{ base: "unset", md: "100vh" }}
      p="8"
      shadow="md"
    >
      <Flex alignItems="center" justifyContent="space-between" h="9">
        <NextLink href="/" passHref>
          <Link aria-label="Home">emmett.dev logo</Link>
        </NextLink>

        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<Icon as={isOpen ? XIcon : MenuIcon} fontSize="3xl" />}
          aria-label={
            !isOpen ? "Open navigation menu" : "Close navigation menu"
          }
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          colorScheme="whiteAlpha"
          color="whiteAlpha.800"
        />
      </Flex>

      <Box mx="-4">
        <Collapse in={!isMobile || isOpen}>
          <Flex flexDir="column" gap="3" pt="6">
            {LinkItems.map((linkItem) => (
              <NavItem key={linkItem.name} item={linkItem} />
            ))}
          </Flex>
        </Collapse>
      </Box>
    </Box>
  );
};

interface NavItemProps extends ButtonProps {
  item: LinkItemProps;
}

const NavItem = ({ item, ...rest }: NavItemProps) => {
  const { link, icon, name } = item;

  const router = useRouter();
  const isActive = router.pathname === link;

  return (
    <NextLink href={link} passHref>
      <Button
        as="a"
        w="100%"
        px="3"
        variant="ghost"
        size="lg"
        colorScheme="whiteAlpha"
        color="white"
        justifyContent="flex-start"
        isActive={isActive}
        leftIcon={<Icon mr="4" fontSize="2xl" as={icon} />}
        _hover={{ bg: "whiteAlpha.200" }}
        {...rest}
      >
        {name}
      </Button>
    </NextLink>
  );
};
