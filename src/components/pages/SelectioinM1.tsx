/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, VFC } from "react";
import { Container, Heading } from "@chakra-ui/react";
import styled from "styled-components";

import { BaseButton } from "../atoms/button/BaseButton";
import { useContest } from "../hooks/useContest";
import { useHistory } from "react-router-dom";

export const SelectionM1: VFC = memo(() => {
  const { getContests, contests } = useContest('m-1gp');

  const history = useHistory();
  const onClickYear = useCallback((contest) => history.push({ pathname: '/judge/m-1gp', state: { contest: contest }}), []);

  useEffect(() => getContests(), []);

  return (
    <>
    <Heading align='center' mb={6}>年代を選択する</Heading>
      <Container align='center'>
        {contests.map((contest) => (
        <>
          <SButton key={contest.id} onClick={() => onClickYear(contest)}>{contest.year}</SButton>
          <br />
        </>
        ))}
      </Container>
    </>
  )
});

const SButton = styled(BaseButton)`
  background-color: #424242;
  color: #DAAA00;
  margin-bottom: 1rem;
`;