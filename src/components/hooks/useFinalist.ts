/* eslint-disable  react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import axios from "axios";

import { FinalistType } from "../types/finalist";

export const useFinalist = (props: string) => {
  const [finalists, setFinalists] = useState<Array<FinalistType>>([]);

  const getFinalists = useCallback(() => {
    axios.get<Array<FinalistType>>(`http://localhost:3001/api/v1/finalists/${props}`, {withCredentials: true}).then((res) => {
      if (res.data) {
        setFinalists(res.data);
      } else {
        alert('ただいま準備中です');
      }
    }).catch(() => alert('情報が取得できませんでした'));
  }, []);
  return { getFinalists, finalists }
};