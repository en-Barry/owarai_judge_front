/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, VFC, useEffect } from "react";
import { Container, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import { useFinalist } from "../hooks/useFinalist";
import { ContestType } from "../types/contest";
import { JudgeTable } from "../molecules/JudgeTable";
import { JudgeButtons } from "../molecules/JudgeButtons";

type CustomizedState = {
  contest: ContestType
}

export const JudgeKing: VFC = memo(() => {
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { contest } = state;
  const { getFinalists, finalists } = useFinalist(`king-of-conte/${contest.year}`);

  useEffect(() => getFinalists(), []);

  return (
    <>
    <Heading align='center' mb={6}>審査結果を入力！</Heading>
    <Container align='center'>
      <JudgeTable finalists={finalists} contest={contest} />
      <JudgeButtons pathname={'/result/king-of-conte'} />
    </Container>
    </>
  )
});