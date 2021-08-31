/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, VFC, useEffect } from "react";
import { Container, Heading } from "@chakra-ui/react";
import styled from "styled-components";

import { BaseButton } from "../atoms/button/BaseButton";
import { useSelGen } from "../hooks/useSelGen";

export const SelectionKing: VFC = memo(() => {
  const { getSelections, generations } = useSelGen('king_of_conte');

  useEffect(() => getSelections(), []);

  return (
    <>
    <Heading align='center' mb={6}>年代を選択する</Heading>
      <Container align='center'>
        {generations.map((gen) => (
          <>
          <SButton key={gen}>{gen}</SButton>
          <br />
          </>
        ))}
      </Container>
    </>
  )
});

const SButton = styled(BaseButton)`
  background-color: #262626;
  color: #DDDDDD;
  margin-bottom: 1rem;
`;