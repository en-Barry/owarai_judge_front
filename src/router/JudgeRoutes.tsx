import { JudgeKing } from "../components/pages/JudgeKing";
import { JudgeM1 } from "../components/pages/JudgeM1";
import { JudgeR1 } from "../components/pages/JudgeR1";
import { Page404 } from "../components/pages/Page404";

export const judgeRoutes = [
  {
    path: '/m-1gp',
    exact: false,
    children: <JudgeM1 />
  },
  {
    path: '/king-of-conte',
    exact: false,
    children: <JudgeKing />
  },
  {
    path: '/r-1gp',
    exact: false,
    children: <JudgeR1 />
  },
  {
  path: '*',
  exact: false,
  children: <Page404 />
  }
]