/* eslint-disable  react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import axios from "axios";

import { JudgementType2 } from "../types/judgement";
import { getJudgement } from "../../config/config";

export const useJudgeResult = (props: string) => {
  const [judgeResults, setJudgeResults] = useState<Array<JudgementType2>>([]);

  const apiURL = getJudgement(props);

  const getJudgeResults = useCallback(() => {
    axios.get<Array<JudgementType2>>(apiURL, {withCredentials: true}).then((res) => {
      setJudgeResults(res.data);
    });
  }, []);
  return { getJudgeResults, judgeResults }
};