export const getContest = (props: string) => `https://owarai-judge-api-back.herokuapp.com/api/v1/contests/${props}`
export const getFinalist = (props: string) => `https://owarai-judge-api-back.herokuapp.com/api/v1/finalists/${props}`
export const getJudgement = (props: string) => `https://owarai-judge-api-back.herokuapp.com/api/v1/judgements/${props}`