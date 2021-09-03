/* eslint-disable  react-hooks/exhaustive-deps */
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";

import { BaseButton } from "../atoms/button/BaseButton";
import { ContestType } from "../types/contest";

type Props = {
  contests: Array<ContestType>;
  pathname: string;
  bgColor: string;
  color: string;
}

export const SelectYearButtons: VFC<Props> = memo((props) => {
  const { contests, pathname, bgColor, color } = props;

  const history = useHistory();
  const onClickYear = useCallback((contest) => history.push({ pathname: `${pathname}`, state: { contest: contest }}), []);

  return (
    <>
      {contests.map((contest) => (
        <>
        <BaseButton style={{color: `#${color}`, backgroundColor: `#${bgColor}`, marginBottom: '1rem'}}
                    key={contest.id} onClick={() => onClickYear(contest)}>
          {contest.year}
        </BaseButton>
        </>
      ))}
    </>
  )
});