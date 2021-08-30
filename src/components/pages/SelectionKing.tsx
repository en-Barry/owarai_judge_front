import { memo, VFC } from "react";
import { Container, Heading } from "@chakra-ui/react";
import styled from "styled-components";
import { BaseButton } from "../atoms/button/BaseButton";

export const SelectionKing: VFC = memo(() => {
  return (
    <>
      <Heading align='center' mb={6}>年代を選択する</Heading>
        <Container align='center'>
          <SButton>2021</SButton>
        </Container>
    </>
  )
});

const SButton = styled(BaseButton)`
  background-color: #262626;
  color: #DDDDDD;
`;