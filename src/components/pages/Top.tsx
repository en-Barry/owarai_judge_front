/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, useCallback, VFC } from "react";
import { Button, Container, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";

export const Top: VFC = memo(() => {
  const history = useHistory();

  const onClickM1 = useCallback(() => history.push('/selection/m-1gp'), []);
  const onClickKing = useCallback(() => history.push('/selection/king-of-conte'), []);
  const onClickR1 = useCallback(() => history.push('/selection/r-1gp'), []);

  return (
    <>
    <Heading align='center' mb={6}>どの審査員になる？</Heading>
      <Container align='center'>
        <Button w='80%' mb={6} p={6} fontSize='lg' bg='#424242' color='#DAAA00' onClick={onClickM1}>
          M-1グランプリ
        </Button>
        <Button w='80%' mb={6} p={6} fontSize='lg' bg='#262626' color='#DDDDDD' onClick={onClickKing}>
          キングオブコント
        </Button>
        <Button w='80%' mb={6} p={6} fontSize='lg' bg='#002D71' color='#DAAA00' onClick={onClickR1}>
          R-1グランプリ
        </Button>
        <Button colorScheme="twitter" leftIcon={<FaTwitter />} mb={6}>
          Twitterでシェアする
        </Button>
      </Container>
    </>
  )
});