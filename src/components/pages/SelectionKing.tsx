/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, VFC, useEffect, useCallback } from "react";
import { Button, Container, Heading } from "@chakra-ui/react";
import styled from "styled-components";

import { BaseButton } from "../atoms/button/BaseButton";
import { useContest } from "../hooks/useContest";
import { useHistory } from "react-router-dom";

export const SelectionKing: VFC = memo(() => {
  const { getContests, contests } = useContest('king-of-conte');

  const history = useHistory();
  const onClickYear = useCallback((contest) => history.push({ pathname: '/judge/king-of-conte', state: { contest: contest }}), []);
  const onClickBack = useCallback(() => history.goBack(), []);

  useEffect(() => getContests(), []);

  return (
    <>
    <Heading align='center' mb={6}>年代を選択する</Heading>
      <Container centerContent>
        {contests.map((contest) => (
          <>
          <SButton key={contest.id} onClick={() => onClickYear(contest)}>
            {contest.year}
          </SButton>
          <br />
          </>
        ))}
        <Button w='80%' mb={6} p={6} fontSize='lg' onClick={onClickBack}>前の画面に戻る</Button>
      </Container>
    </>
  )
});

const SButton = styled(BaseButton)`
  background-color: #262626;
  color: #DDDDDD;
  margin-bottom: 0.5rem;
`;