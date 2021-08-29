/* eslint-disable  react-hooks/exhaustive-deps */
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickTop = useCallback(() => history.push('/'), []);
  const onClickM1 = useCallback(() => history.push('/selection/m-1gp'), []);
  const onClickKing = useCallback(() => history.push('/selection/king-of-conte'), []);
  const onClickR1 = useCallback(() => history.push('/selection/r-1gp'), []);

  return (
    <>
      <Flex as='nav' 
            bg='gray.50'
            color='gray.800'
            align='center'
            justify='space-between'
            padding={{ base: 4, md: 5 }}>
        <Flex align='center' as='a' mr={8} _hover={{ cursor: 'pointer'}} onClick={onClickTop}>
          <Heading as='h1' fontSize={{ base: 'md', md: 'lg' }}>オワライジャッジ.com</Heading>
        </Flex>
        <Flex align='center' fontSize='sm' flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}>
            <Link onClick={onClickM1}>M-1グランプリ</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickKing}>キングオブコント</Link>
          </Box>
          <Box>
            <Link onClick={onClickR1}>R-1グランプリ</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={ onOpen }/>
      </Flex>
      <MenuDrawer onClose={ onClose }
                  isOpen={ isOpen }
                  onClickTop={ onClickTop } 
                  onClickM1={ onClickM1 }
                  onClickKing= { onClickKing }
                  onClickR1={ onClickR1 } />
    </>
  )
});