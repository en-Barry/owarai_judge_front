import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { JudgementType } from "../types/judgement";

export const usePostJudge = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const postJudgement = useCallback((judgements: Array<JudgementType>) => {
    setLoading(true);
    
    axios.post(`http://localhost:3001/api/v1/judgements`, {judgements}, {
      withCredentials: true
      }).then((res) => {
        if (res.data.status === 'not_found') {
          alert(res.data.errors.title)
        } else {
          axios.get<Array<JudgementType>>(`http://localhost:3001/api/v1/judgements/king-of-conte/${judgements[0].contest_id}`).then(res => {
          if (res.data) {
            history.push(`/result/king-of-conte`);
          } else {
            alert('ただいま準備中です');
          }})
        }
      }).catch(() => alert('情報が取得できませんでした')).finally(() => setLoading(false));
    }, [history]);
  return { postJudgement, loading }
};