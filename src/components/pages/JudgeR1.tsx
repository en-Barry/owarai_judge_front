/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, VFC } from "react";
import { Button, Container, Heading } from "@chakra-ui/react";

import { JudgeButtons } from "../molecules/JudgeButtons";
import { JudgeTable } from "../molecules/JudgeTable";
import { ContestType } from "../types/contest";
import { useHistory, useLocation } from "react-router-dom";
import { useFinalist } from "../hooks/useFinalist";

interface CustomizedState {
  contest: ContestType
}

export const JudgeR1: VFC = memo(() => {
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { contest } = state;
  const { getFinalists, finalists } = useFinalist(`${contest.id}`);

  const history = useHistory();
  const onClickBack = useCallback(() => history.goBack(), []);

  useEffect(() => getFinalists(), []);

  return (
  <>
    <Heading align='center' mb={6} pt={5}>審査結果を入力！</Heading>
    <Container align='center'>
      {finalists.length > 9 ? (
        <>
        <JudgeTable finalists={finalists} contest={contest} />
        <JudgeButtons pathname={'/result/r-1gp'} contest={contest} />
        </>
      ) : (
        <>
        <Heading as='h2' size='sm' p={10}>時間をおいても更新されない場合は<br></br>アップデートをお待ちください</Heading>
        <Button w='80%' mb={6} p={6} fontSize='lg' onClick={onClickBack}>前の画面に戻る</Button>
        </>
      )}
    </Container>
  </>  
  )
});