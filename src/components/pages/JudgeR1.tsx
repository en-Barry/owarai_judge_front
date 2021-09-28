/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, useEffect, VFC } from "react";
import { Container, Heading } from "@chakra-ui/react";

import { JudgeButtons } from "../molecules/JudgeButtons";
import { JudgeTable } from "../molecules/JudgeTable";
import { ContestType } from "../types/contest";
import { useLocation } from "react-router-dom";
import { useFinalist } from "../hooks/useFinalist";

interface CustomizedState {
  contest: ContestType
}

export const JudgeR1: VFC = memo(() => {
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { contest } = state;
  const { getFinalists, finalists } = useFinalist(`r-1gp/${contest.year}`);

  useEffect(() => getFinalists(), []);

  return (
  <>
    <Heading align='center' mb={6}>審査結果を入力！</Heading>
    <Container align='center'>
      <JudgeTable finalists={finalists} contest={contest} />
      <JudgeButtons pathname={'/result/r-1gp'} contest={contest} />
    </Container>
  </>  
  )
});