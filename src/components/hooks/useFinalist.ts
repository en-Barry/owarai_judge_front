/* eslint-disable  react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import axios from "axios";

import { FinalistType } from "../types/finalist";
import { getFinalist } from "../../config/config";

export const useFinalist = (props: string) => {
  const [finalists, setFinalists] = useState<Array<FinalistType>>([]);

  const apiURL = getFinalist(props);

  const getFinalists = useCallback(() => {
    axios.get<Array<FinalistType>>(apiURL, {withCredentials: true}).then((res) => {
      if (res.data) {
        setFinalists(res.data);
      } else {
        alert('ただいま準備中です');
      }
    }).catch(() => alert('情報が取得できませんでした'));
  }, []);
  return { getFinalists, finalists }
};