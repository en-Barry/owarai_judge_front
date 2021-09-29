/* eslint-disable  react-hooks/exhaustive-deps */
import { Container, Heading } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useLocation } from "react-router-dom";

import { useFinalist } from "../hooks/useFinalist";
import { JudgeButtons } from "../molecules/JudgeButtons";
import { JudgeTable } from "../molecules/JudgeTable";
import { ContestType } from "../types/contest";

interface CustomizedState {
  contest: ContestType
}

export const JudgeM1: VFC = memo(() => {
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { contest } = state;
  const { getFinalists, finalists } = useFinalist(`m-1gp/${contest.year}`);

  useEffect(() => getFinalists(), []);

  return (
    <>
    <Heading align='center' mb={6} pt={5}>審査結果を入力！</Heading>
    <Container align='center'>
      <JudgeTable finalists={finalists} contest={contest} />
      <JudgeButtons pathname={'/result/m-1gp'} contest={contest} />
    </Container>
    </>
  )
});