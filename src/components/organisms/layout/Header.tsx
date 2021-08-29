import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <MenuIconButton onOpen={ onOpen }/>
      </Flex>
      <MenuDrawer  onClose={ onClose } isOpen={ isOpen }  />
    </>
  )
});