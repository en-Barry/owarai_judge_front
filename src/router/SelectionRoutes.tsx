import { Page404 } from "../components/pages/Page404";
import { SelectionM1 } from "../components/pages/SelectioinM1";
import { SelectionKing } from "../components/pages/SelectionKing";
import { SelectionR1 } from "../components/pages/SelectionR1";
import { Top } from "../components/pages/Top";

export const selectionRoutes = [
  {
    path: '/',
    exact: true,
    children: <Top />
  },
  {
    path: '/m-1gp',
    exact: false,
    children: <SelectionM1 />
  },
  {
    path: '/king-of-conte',
    exact: false,
    children: <SelectionKing />
  },
  {
    path: '/r-1gp',
    exact: false,
    children: <SelectionR1 />
  },
  {
  path: '*',
  exact: false,
  children: <Page404 />
  }
]