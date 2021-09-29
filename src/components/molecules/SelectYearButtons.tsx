/* eslint-disable  react-hooks/exhaustive-deps */
import { Button, ButtonProps } from "@chakra-ui/react";
import { FC, memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";

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

  const YButton : FC<ButtonProps> = (props) => <Button width='80%' style={{color: `#${color}`, backgroundColor: `#${bgColor}`, marginBottom: '1rem'}} {...props} />

  return (
    <>
      {contests.map((contest) => (
        <>
        <YButton key={contest.id} onClick={() => onClickYear(contest)}>
          {contest.year}
        </YButton>
        </>
      ))}
    </>
  )
});