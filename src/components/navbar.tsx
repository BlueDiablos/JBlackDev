import { ReactNode } from "react";
import{
    Box,
    Flex,
    Link,
    Button,
    Stack,
    useColorModeValue,
    useColorMode,
    useDisclosure,
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const NavLink = ({ children }: {children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('', ''),
        }}
        href={'#'}>
        {children}
  </Link>

);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('', '')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontSize='lg' fontWeight='bold'>JBlack Dev</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
