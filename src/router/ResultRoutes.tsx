import { Page404 } from "../components/pages/Page404";
import { ResultM1 } from "../components/pages/ResultM1";
import { ResultKing } from "../components/pages/ResultKing";
import { ResultR1 } from "../components/pages/ResultR1";

export const resultRoutes = [
  {
    path: '/m-1gp',
    exact: false,
    children: <ResultM1 />
  },
  {
    path: '/king-of-conte',
    exact: false,
    children: <ResultKing />
  },
  {
    path: '/r-1gp',
    exact: false,
    children: <ResultR1 />
  },
  {
  path: '*',
  exact: false,
  children: <Page404 />
  }
]