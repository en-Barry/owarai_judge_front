/* eslint-disable  react-hooks/exhaustive-deps */
import { Heading } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useLocation } from "react-router-dom";

import { useJudgeResult } from "../hooks/useJudgeResult";
import { ResultTable } from "../molecules/ResultTable";
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

  return (
    <>
    <Heading pt={5} align='center' mb={6}>結果発表〜〜〜！！！</Heading>
    {judgeResults.length !== 0 && (
      <ResultTable other={other} finalists={finalists} judges={judges} judgeResults2={judgeResults2} />
    )}
    </>
  )
});