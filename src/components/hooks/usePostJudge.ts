import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { postJudgements } from "../../config/config";
import { ContestType } from "../types/contest";

import { JudgementType } from "../types/judgement";

export const usePostJudge = (contest: ContestType) => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const postJudgement = useCallback((judgements: Array<JudgementType>, contest: ContestType) => {
    setLoading(true);

    const apiURL = postJudgements();
    
    axios.post(apiURL, {judgements}, {
      withCredentials: true
      }).then((res) => {
        if (res.data.status === 'not_found') {
          alert(res.data.errors.title)
        } else {
          setLoading(false);
          history.push({ pathname: `/result/king-of-conte`, state: { contest: contest }});
        }
      }).catch(() => alert('情報が取得できませんでした')).finally(() => setLoading(false));
    }, [history]);
  return { postJudgement, loading }
};