/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, useCallback, VFC } from "react";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const ToTopButton: VFC = memo(() => {

  const history = useHistory();
  const onClickTop = useCallback(() => history.push(`/`), []);

  return (
    <>
      <Button w='80%' mt={4} mb={6} p={6} fontSize='lg' onClick={onClickTop}>トップ画面に戻る</Button>
    </>
  )
})