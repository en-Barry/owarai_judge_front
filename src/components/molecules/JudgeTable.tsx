import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { ContestType } from "../types/contest";
import { FinalistType } from "../types/finalist";

type Props = {
  finalists: Array<FinalistType>;
  contest: ContestType;
}

export const JudgeTable: VFC<Props> = memo((props) => {
  const { finalists, contest } = props;

  return (
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
        {finalists.map((finalist, i) => (
        <Tr key={finalist.id}>
          <Td fontWeight={"bold"}>{i + 1}</Td>
          <Td fontWeight={"bold"}>{finalist.name}</Td>
          <Td isNumeric>
            <NumberInput maxW={20} defaultValue={85} max={100} min={70}>
              <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
          </Td>
        </Tr>
        ))}
      </Tbody>
  </Table>
  )
})