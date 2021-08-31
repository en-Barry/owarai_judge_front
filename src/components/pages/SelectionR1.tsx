/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, useEffect, VFC } from "react";
import { Container, Heading } from "@chakra-ui/react";
import styled from "styled-components";

import { useSelGen } from "../hooks/useSelGen";
import { BaseButton } from "../atoms/button/BaseButton";

export const SelectionR1: VFC = memo(() => {
  const { getSelections, generations } = useSelGen('r-1gp');

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
  background-color: #002D71;
  color: #DAAA00;
  margin-bottom: 1rem;
`;