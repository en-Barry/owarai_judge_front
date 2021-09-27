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
};