/* eslint-disable  react-hooks/exhaustive-deps */
import { Container, Heading } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useLocation } from "react-router-dom";

import { useJudgeResult } from "../hooks/useJudgeResult";
import { ContestType } from "../types/contest";

type CustomizedState = {
  contest: ContestType
}


export const ResultKing: VFC = memo(() => {
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { contest } = state;
  const { getJudgeResults, judgeResults } = useJudgeResult(`king-of-conte/${contest.id}`);

  useEffect(() => getJudgeResults(), []);

  const other = judgeResults[0];
  const finalists = judgeResults[1];
  const judges = judgeResults[2];
  const judgeResults2 = judgeResults.slice();
  const DeletejudgeResults = judgeResults2.splice(0, 3)

  // console.log(judgeResults[1].score) //松本人志、滝音、点数
  // console.log(judgeResults[51].score) //ログインユーザー、滝音、点数
  // console.log(judgeResults)

  console.log(other)
  console.log(finalists)
  console.log(judges)
  console.log(judgeResults2)

  return (
    <>
    <Heading align='center' mb={6}>結果発表〜〜〜！！！</Heading>
    {judgeResults.length !== 0 && (
      <Container align='center'>
        
      </Container>
    )}
    </>
  )
});