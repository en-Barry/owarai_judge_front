/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, VFC, useEffect, useCallback } from "react";
import { Button, Container, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { useContest } from "../hooks/useContest";
import { SelectYearButtons } from "../molecules/SelectYearButtons";

export const SelectionKing: VFC = memo(() => {
  const { getContests, contests } = useContest('1');

  const history = useHistory();
  const onClickBack = useCallback(() => history.goBack(), []);

  useEffect(() => getContests(), []);

  return (
    <>
    <Heading pt={5} align='center' mb={6}>年代を選択する</Heading>
      <Container centerContent>
        <SelectYearButtons contests={contests} pathname={'/judge/king-of-conte'} bgColor={'262626'} color={'DDDDDD'} />
        <Button w='80%' mb={6} p={6} fontSize='lg' onClick={onClickBack}>前の画面に戻る</Button>
      </Container>
    </>
  )
});