/* eslint-disable  react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import axios from "axios";

import { ContestType } from "../types/contest";

export const useContest = (props: string) => {
  const [contests, setContests] = useState<Array<ContestType>>([]);

  const getContests = useCallback(() => {
    axios.get<Array<ContestType>>(`https://owarai-judge-api-back.herokuapp.com/api/v1/contests/${props}`).then((res) => {
      setContests(res.data);
    });
  }, []);
  return { getContests, contests }
};