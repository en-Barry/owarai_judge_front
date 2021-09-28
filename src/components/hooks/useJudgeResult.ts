/* eslint-disable  react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import axios from "axios";

import { JudgementType2 } from "../types/judgement";

export const useJudgeResult = (props: string) => {
  const [judgeResults, setJudgeResults] = useState<Array<JudgementType2>>([]);

  const getJudgeResults = useCallback(() => {
    axios.get<Array<JudgementType2>>(`http://localhost:3001/api/v1/judgements/${props}`, {withCredentials: true}).then((res) => {
      setJudgeResults(res.data);
    });
  }, []);
  return { getJudgeResults, judgeResults }
};