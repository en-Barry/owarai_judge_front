import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { JudgementType } from "../types/judgement";

export const usePostJudge = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const postJudgement = useCallback((judgement: JudgementType) => {
    setLoading(true);
    
    axios.post<JudgementType>(`http://localhost:3001/api/v1/judgements`, {contest_id: judgement.contest_id, finalist_id: judgement.finalist_id, score: judgement.score}, {
      withCredentials: true
      }).then((res) => {
      axios.get<JudgementType>(`http://localhost:3001/api/v1/judgements/king-of-conte/${judgement.contest_id}`).then(res => {
        if (res.data) {
          history.push(`/result/king-of-conte`);
        } else {
          alert('ただいま準備中です');
        }
      }).catch(() => alert('情報が取得できませんでした')).finally(() => setLoading(false));
    });
  }, [history]);
  return { postJudgement, loading }
};