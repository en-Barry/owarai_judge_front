/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, VFC, useEffect } from "react";
import { Container, Heading } from "@chakra-ui/react";
import styled from "styled-components";

import { BaseButton } from "../atoms/button/BaseButton";
import { useSelYear } from "../hooks/useSelYear";

export const SelectionKing: VFC = memo(() => {
  const { getYears, years } = useSelYear('king_of_conte');

  useEffect(() => getYears(), []);

  return (
    <>
    <Heading align='center' mb={6}>年代を選択する</Heading>
      <Container align='center'>
        {years.map((year) => (
          <>
          <SButton key={year.toString()}>{year}</SButton>
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