/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, VFC } from "react";
import { Button, Container, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { useContest } from "../hooks/useContest";
import { SelectYearButtons } from "../molecules/SelectYearButtons";

export const SelectionM1: VFC = memo(() => {
  const { getContests, contests } = useContest('0');

  const history = useHistory();
  const onClickBack = useCallback(() => history.goBack(), []);

  useEffect(() => getContests(), []);

  return (
    <>
    <Heading align='center' mb={6} pt={5}>年代を選択する</Heading>
      <Container align='center'>
        <SelectYearButtons contests={contests} pathname={'/judge/m-1gp'} bgColor={'424242'} color={'DAAA00'} />
        <Button w='80%' mb={6} p={6} fontSize='lg' onClick={onClickBack}>前の画面に戻る</Button>
      </Container>
    </>
  )
});