/* eslint-disable  react-hooks/exhaustive-deps */
import { Button, Container, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useLocation } from "react-router-dom";

import { useFinalist } from "../hooks/useFinalist";
import { ContestType } from "../types/contest";

interface CustomizedState {
  contest: ContestType
}

export const JudgeM1: VFC = memo(() => {
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { contest } = state;
  const { getFinalists, finalists } = useFinalist(`m-1gp/${contest.year}`);

  useEffect(() => getFinalists(), []);

  return (
    <>
    <Heading align='center' mb={6}>審査結果を入力！</Heading>
    <Container align='center'>
      <Table variant='simple' size='sm'>
        <TableCaption>{`M-1グランプリ${contest.year}`}</TableCaption>
        <Thead>
          <Tr>
            <Th>order</Th>
            <Th>finalist</Th>
            <Th>score</Th>
          </Tr>
        </Thead>
          <Tbody>
            {finalists.map((finalist, i) => (
            <Tr>
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
      <Button w='80%' mt={4} mb={6} p={6} fontSize='lg'>審査完了！</Button>
      <Button w='80%' mb={6} p={6} fontSize='lg'>結果だけ見る</Button>
      <Button w='80%' mb={6} p={6} fontSize='lg'>年代選択に戻る</Button>
    </Container>
    </>
  )
});