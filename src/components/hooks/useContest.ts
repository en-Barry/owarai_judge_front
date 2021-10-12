/* eslint-disable  react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import axios from "axios";

import { ContestType } from "../types/contest";
import { getContest } from "../../config/config"

export const useContest = (props: string) => {
  const [contests, setContests] = useState<Array<ContestType>>([]);

  const apiURL = getContest(props)

  const getContests = useCallback(() => {
    axios.get<Array<ContestType>>(apiURL).then((res) => {
      setContests(res.data);
    });
  }, []);
  return { getContests, contests }
};