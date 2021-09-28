import { memo, VFC, ChangeEvent, FormEvent } from "react";
import { Button, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Table, TableCaption, Tbody, Td, Th, Thead, Tr, useControllableState } from "@chakra-ui/react";

import { ContestType } from "../types/contest";
import { FinalistType } from "../types/finalist";
import { JudgementType } from "../types/judgement";
import { usePostJudge } from "../hooks/usePostJudge";

type Props = {
  finalists: Array<FinalistType>;
  contest: ContestType;
}

export const JudgeTable: VFC<Props> = memo((props) => {
  const { finalists, contest } = props;
  const { postJudgement, loading } = usePostJudge();

  const [score1, setScore1] = useControllableState({ defaultValue: 85 });
  const [score2, setScore2] = useControllableState({ defaultValue: 85 });
  const [score3, setScore3] = useControllableState({ defaultValue: 85 });
  const [score4, setScore4] = useControllableState({ defaultValue: 85 });
  const [score5, setScore5] = useControllableState({ defaultValue: 85 });
  const [score6, setScore6] = useControllableState({ defaultValue: 85 });
  const [score7, setScore7] = useControllableState({ defaultValue: 85 });
  const [score8, setScore8] = useControllableState({ defaultValue: 85 });
  const [score9, setScore9] = useControllableState({ defaultValue: 85 });
  const [score10, setScore10] = useControllableState({ defaultValue: 85 });

  const ChangeScore1 = (e: ChangeEvent<HTMLInputElement>) => {
    setScore1(Number(e.target.value));
  }
  const ChangeScore2 = (e: ChangeEvent<HTMLInputElement>) => {
    setScore2(Number(e.target.value));
  }
  const ChangeScore3 = (e: ChangeEvent<HTMLInputElement>) => {
    setScore3(Number(e.target.value));
  }
  const ChangeScore4 = (e: ChangeEvent<HTMLInputElement>) => {
    setScore4(Number(e.target.value));
  }
  const ChangeScore5 = (e: ChangeEvent<HTMLInputElement>) => {
    setScore5(Number(e.target.value));
  }
  const ChangeScore6 = (e: ChangeEvent<HTMLInputElement>) => {
    setScore6(Number(e.target.value));
  }
  const ChangeScore7 = (e: ChangeEvent<HTMLInputElement>) => {
    setScore7(Number(e.target.value));
  }
  const ChangeScore8 = (e: ChangeEvent<HTMLInputElement>) => {
    setScore8(Number(e.target.value));
  }
  const ChangeScore9 = (e: ChangeEvent<HTMLInputElement>) => {
    setScore9(Number(e.target.value));
  }
  const ChangeScore10 = (e: ChangeEvent<HTMLInputElement>) => {
    setScore10(Number(e.target.value));
  }


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const obj1: JudgementType = {
      score: score1,
      finalist_id: finalists[0].id,
      contest_id: contest.id
    };
    const obj2: JudgementType = {
      score: score2,
      finalist_id: finalists[1].id,
      contest_id: contest.id
    };
    const obj3: JudgementType = {
      score: score3,
      finalist_id: finalists[2].id,
      contest_id: contest.id
    };
    const obj4: JudgementType = {
      score: score4,
      finalist_id: finalists[3].id,
      contest_id: contest.id
    };
    const obj5: JudgementType = {
      score: score5,
      finalist_id: finalists[4].id,
      contest_id: contest.id
    };
    const obj6: JudgementType = {
      score: score6,
      finalist_id: finalists[5].id,
      contest_id: contest.id
    };
    const obj7: JudgementType = {
      score: score7,
      finalist_id: finalists[6].id,
      contest_id: contest.id
    };
    const obj8: JudgementType = {
      score: score8,
      finalist_id: finalists[7].id,
      contest_id: contest.id
    };
    const obj9: JudgementType = {
      score: score9,
      finalist_id: finalists[8].id,
      contest_id: contest.id
    };
    const obj10: JudgementType = {
      score: score10,
      finalist_id: finalists[9].id,
      contest_id: contest.id
    };
    const judgements: Array<JudgementType> = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10]
    if (window.confirm('現在、1コンテストにつき審査は一度までです。審査結果を確定しますか？')) {
      postJudgement(judgements);
    } else {
      
    }
  };

  return (
    <>
    {finalists.length !== 0 && (
    <Table variant='simple' size='sm'>
    <TableCaption>{`${contest.name}${contest.year}`}</TableCaption>
    <Thead>
      <Tr>
        <Th>order</Th>
        <Th>finalist</Th>
        <Th>score</Th>
      </Tr>
    </Thead>
      <Tbody>
        <Tr>
          <Td fontWeight={"bold"}>{1}</Td>
          <Td fontWeight={"bold"}>{finalists[0].name}</Td>
          <Td isNumeric>
            <form>
            <NumberInput maxW={20} defaultValue={85} max={100} min={70}>
              <NumberInputField value={score1} onChange={ChangeScore1} />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={() => { if (score1 < 100) { setScore1(score1 + 1) } }} />
                <NumberDecrementStepper onClick={() => { if (score1 > 70) { setScore1(score1 - 1) } }} />
              </NumberInputStepper>
            </NumberInput>
            </form>
          </Td>
        </Tr>
        <Tr>
          <Td fontWeight={"bold"}>{2}</Td>
          <Td fontWeight={"bold"}>{finalists[1].name}</Td>
          <Td isNumeric>
            <form>
            <NumberInput maxW={20} defaultValue={85} max={100} min={70}>
              <NumberInputField value={score2} onChange={ChangeScore2} />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={() => { if (score2 < 100) { setScore2(score2 + 1) } }} />
                <NumberDecrementStepper onClick={() => { if (score2 > 70) { setScore2(score2 - 1) } }} />
              </NumberInputStepper>
            </NumberInput>
            </form>
          </Td>
        </Tr>
        <Tr>
          <Td fontWeight={"bold"}>{3}</Td>
          <Td fontWeight={"bold"}>{finalists[2].name}</Td>
          <Td isNumeric>
            <form>
            <NumberInput maxW={20} defaultValue={85} max={100} min={70}>
              <NumberInputField value={score3} onChange={ChangeScore3} />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={() => { if (score3 < 100) { setScore3(score3 + 1) } }} />
                <NumberDecrementStepper onClick={() => { if (score3 > 70) { setScore3(score3 - 1) } }} />
              </NumberInputStepper>
            </NumberInput>
            </form>
          </Td>
        </Tr>
        <Tr>
          <Td fontWeight={"bold"}>{4}</Td>
          <Td fontWeight={"bold"}>{finalists[3].name}</Td>
          <Td isNumeric>
            <form>
            <NumberInput maxW={20} defaultValue={85} max={100} min={70}>
              <NumberInputField value={score4} onChange={ChangeScore4} />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={() => { if (score4 < 100) { setScore4(score4 + 1) } }} />
                <NumberDecrementStepper onClick={() => { if (score4 > 70) { setScore4(score4 - 1) } }} />
              </NumberInputStepper>
            </NumberInput>
            </form>
          </Td>
        </Tr>
        <Tr>
          <Td fontWeight={"bold"}>{5}</Td>
          <Td fontWeight={"bold"}>{finalists[4].name}</Td>
          <Td isNumeric>
            <form>
            <NumberInput maxW={20} defaultValue={85} max={100} min={70}>
              <NumberInputField value={score5} onChange={ChangeScore5} />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={() => { if (score5 < 100) { setScore5(score5 + 1) } }} />
                <NumberDecrementStepper onClick={() => { if (score5 > 70) { setScore5(score5 - 1) } }} />
              </NumberInputStepper>
            </NumberInput>
            </form>
          </Td>
        </Tr>
        <Tr>
          <Td fontWeight={"bold"}>{6}</Td>
          <Td fontWeight={"bold"}>{finalists[5].name}</Td>
          <Td isNumeric>
            <form>
            <NumberInput maxW={20} defaultValue={85} max={100} min={70}>
              <NumberInputField value={score6} onChange={ChangeScore6} />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={() => { if (score6 < 100) { setScore6(score6 + 1) } }} />
                <NumberDecrementStepper onClick={() => { if (score6 > 70) { setScore6(score6 - 1) } }} />
              </NumberInputStepper>
            </NumberInput>
            </form>
          </Td>
        </Tr>
        <Tr>
          <Td fontWeight={"bold"}>{7}</Td>
          <Td fontWeight={"bold"}>{finalists[6].name}</Td>
          <Td isNumeric>
            <form>
            <NumberInput maxW={20} defaultValue={85} max={100} min={70}>
              <NumberInputField value={score7} onChange={ChangeScore7} />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={() => { if (score7 < 100) { setScore7(score7 + 1) } }} />
                <NumberDecrementStepper onClick={() => { if (score7 > 70) { setScore7(score7 - 1) } }} />
              </NumberInputStepper>
            </NumberInput>
            </form>
          </Td>
        </Tr>
        <Tr>
          <Td fontWeight={"bold"}>{8}</Td>
          <Td fontWeight={"bold"}>{finalists[7].name}</Td>
          <Td isNumeric>
            <form>
            <NumberInput maxW={20} defaultValue={85} max={100} min={70}>
              <NumberInputField value={score8} onChange={ChangeScore8} />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={() => { if (score8 < 100) { setScore8(score8 + 1) } }} />
                <NumberDecrementStepper onClick={() => { if (score8 > 70) { setScore8(score8 - 1) } }} />
              </NumberInputStepper>
            </NumberInput>
            </form>
          </Td>
        </Tr>
        <Tr>
          <Td fontWeight={"bold"}>{9}</Td>
          <Td fontWeight={"bold"}>{finalists[8].name}</Td>
          <Td isNumeric>
            <form>
            <NumberInput maxW={20} defaultValue={85} max={100} min={70}>
              <NumberInputField value={score9} onChange={ChangeScore9} />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={() => { if (score9 < 100) { setScore9(score9 + 1) } }} />
                <NumberDecrementStepper onClick={() => { if (score9 > 70) { setScore9(score9 - 1) } }} />
              </NumberInputStepper>
            </NumberInput>
            </form>
          </Td>
        </Tr>
        <Tr>
          <Td fontWeight={"bold"}>{10}</Td>
          <Td fontWeight={"bold"}>{finalists[9].name}</Td>
          <Td isNumeric>
            <form>
            <NumberInput maxW={20} defaultValue={85} max={100} min={70}>
              <NumberInputField value={score10} onChange={ChangeScore10} />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={() => { if (score10 < 100) { setScore10(score10 + 1) } }} />
                <NumberDecrementStepper onClick={() => { if (score10 > 70) { setScore10(score10 - 1) } }} />
              </NumberInputStepper>
            </NumberInput>
            </form>
          </Td>
        </Tr>
      </Tbody>
    </Table>
    )}
    <Button w='80%' mt={4} mb={6} p={6} fontSize='lg' onClick={handleSubmit} loading={loading}>審査完了</Button>
  </>
  )
})