import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, Link, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
    <Flex as='nav' 
          bg='gray.50'
          color='gray.800'
          align='center'
          justify='space-between'
          padding={{ base: 4, md: 5 }}>
      <Flex align='center' as='a' mr={8} _hover={{ cursor: 'pointer'}}>
        <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }}>オワライジャッジ.com</Heading>
      </Flex>
      <Flex align='center' fontSize='sm' flexGrow={2} display={{ base: 'none', md: 'flex' }}>
        <Box pr={4}>
          <Link>M-1グランプリ</Link>
        </Box>
        <Box pr={4}>
          <Link>キングオブコント</Link>
        </Box>
        <Box>
          <Link>R-1グランプリ</Link>
        </Box>
      </Flex>
      <IconButton aria-label='メニューボタン'
                  icon={<HamburgerIcon />}
                  size='sm'
                  variant='unstyled'
                  display={{ base: 'block', md: 'none' }}
                  onClick={onOpen} />
    </Flex>
    <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg='gray.100'>
            <Button w='100%'>TOP</Button>
            <Button w='100%'>M-1グランプリ</Button>
            <Button w='100%'>キングオブコント</Button>
            <Button w='100%'>R-1グランプリ</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    </>
  )
});