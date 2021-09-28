import { FinalistType } from "./finalist";
import { JudgeType } from "./judge";

export type JudgementType = {
  contest_id: number;
  finalist_id: number;
  score: number;
};

export type JudgementType2 = {
  other_results: Array<JudgementType>;
  contest_id: number;
  finalist_id: number;
  score: number;
  finalists_name: Array<FinalistType>;
  judges_name: Array<JudgeType>;
  
};