/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, useCallback, VFC } from "react";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

type Props = {
  pathname: string;
}

export const JudgeButtons: VFC<Props> = memo((props) => {
  const { pathname } = props;

  const history = useHistory();
  const onClickJudgement = useCallback(() => history.push(`${pathname}`), []);
  const onClickBack = useCallback(() => history.goBack(), []);

  return (
    <>
      <Button w='80%' mt={4} mb={6} p={6} fontSize='lg' onClick={onClickJudgement}>審査完了！</Button>
      <Button w='80%' mb={6} p={6} fontSize='lg'>結果だけ見る</Button>
      <Button w='80%' mb={6} p={6} fontSize='lg' onClick={onClickBack}>前の画面に戻る</Button>
    </>
  )
})