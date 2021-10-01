/* eslint-disable  react-hooks/exhaustive-deps */
import { Button, Container, Heading } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { FaTwitter } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { TwitterShareButton } from "react-share";
import { ToTopButton } from "../atoms/button/ToTopButton";

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
    {judgeResults.length > 4 && (
      <>
      <p style={{textAlign: 'center', fontWeight: 'bolder'}}>{`＼国民審査員${judgeResults.slice(-1)[0].count}人参加中！／`}</p>
      <ResultTable other={other} finalists={finalists} judges={judges} judgeResults2={judgeResults2} />
      <Container align='center'>
        {judgeResults2[52] && (
          <TwitterShareButton url={'https://www.owarai-judge.com'} title={`私の審査結果がこちら！\n\n${judgeResults2[50].score}点 ${finalists.finalists_name[0].name}\n${judgeResults2[51].score}点 ${finalists.finalists_name[1].name}\n${judgeResults2[52].score}点 ${finalists.finalists_name[2].name}\n${judgeResults2[53].score}点 ${finalists.finalists_name[3].name}\n${judgeResults2[54].score}点 ${finalists.finalists_name[4].name}\n${judgeResults2[55].score}点 ${finalists.finalists_name[5].name}\n${judgeResults2[56].score}点 ${finalists.finalists_name[6].name}\n${judgeResults2[57].score}点 ${finalists.finalists_name[7].name}\n${judgeResults2[58].score}点 ${finalists.finalists_name[8].name}\n${judgeResults2[59].score}点 ${finalists.finalists_name[9].name}\n#キングオブコント${contest.year}\n`}>
            <Button mt={5} colorScheme="twitter" leftIcon={<FaTwitter />} mb={6} p={6} fontSize='lg' >自分の審査結果をシェアする！</Button>
          </TwitterShareButton>
        )}
        <ToTopButton />
        </Container>
      </>
    )}
    </>
  )
});