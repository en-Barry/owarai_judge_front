/* eslint-disable  react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import axios from "axios";

export const useSelGen = (props: string) => {
  const [generations, setGenerations] = useState<Array<number>>([]);

  const getSelections = useCallback(() => {
    axios.get<Array<number>>(`http://localhost:3001/api/v1/contests/${props}`).then((res) => {
      setGenerations(res.data);
    });
  }, []);
  return { getSelections, generations }
};