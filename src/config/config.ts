export const getContest = (props: string) => `http://localhost:3001/api/v1/contests/${props}`
export const getFinalist = (props: string) => `http://localhost:3001/api/v1/finalists/${props}`
export const getJudgement = (props: string) => `http://localhost:3001/api/v1/judgements/${props}`
export const postJudgements= () => `http://localhost:3001/api/v1/judgements`