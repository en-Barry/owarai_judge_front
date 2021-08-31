/* eslint-disable  react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import axios from "axios";

export const useSelYear = (props: string) => {
  const [years, setYears] = useState<Array<number>>([]);

  const getYears = useCallback(() => {
    axios.get<Array<number>>(`http://localhost:3001/api/v1/contests/${props}`).then((res) => {
      setYears(res.data);
    });
  }, []);
  return { getYears, years }
};