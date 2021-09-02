/* eslint-disable  react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import axios from "axios";

import { ContestType } from "../types/contest";

export const useContest = (props: string) => {
  const [contests, setContests] = useState<Array<ContestType>>([]);

  const getContests = useCallback(() => {
    axios.get<Array<ContestType>>(`http://localhost:3001/api/v1/contests/${props}`).then((res) => {
      setContests(res.data);
    });
  }, []);
  return { getContests, contests }
};