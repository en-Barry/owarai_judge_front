/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, useEffect, VFC } from "react";
import { Container, Heading } from "@chakra-ui/react";
import styled from "styled-components";

import { useSelYear } from "../hooks/useSelYear";
import { BaseButton } from "../atoms/button/BaseButton";

export const SelectionR1: VFC = memo(() => {
  const { getYears, years } = useSelYear('r-1gp');

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
  background-color: #002D71;
  color: #DAAA00;
  margin-bottom: 1rem;
`;