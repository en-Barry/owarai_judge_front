import { Box, BoxProps, Container, Table, TableCellProps, TableColumnHeaderProps, TableRowProps, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { memo, VFC } from "react";
import { JudgementType2 } from "../types/judgement";

type Props = {
  other: JudgementType2;
  finalists: JudgementType2;
  judges: JudgementType2;
  judgeResults2: JudgementType2[];
}

const SBox : FC<BoxProps> = (props) => <Box p='2' m='2' borderRadius='xl' borderWidth='2px' {...props} />
const STr : FC<TableRowProps> = (props) => <Tr backgroundColor='gray.700' {...props} />
const STh : FC<TableColumnHeaderProps> = (props) => <Th color='white' textAlign='center' {...props} />
const STd : FC<TableCellProps> = (props) => <Td color='yellow.400' fontWeight='bold' textAlign='center' {...props} />
const FTh : FC<TableColumnHeaderProps> = (props) => <Th bg='white' color='gray.700' colSpan={7} textAlign='center' fontSize={16} {...props} />

export const ResultTable: VFC<Props> = memo((props) => {
  const { other, finalists, judges, judgeResults2 } = props;

  return (
    <>
    <Container align='center'>
      <SBox>
        <Table size='sm'>
          <Thead>
            <Tr>
              <FTh>{finalists.finalists_name[0].name}</FTh>
            </Tr>
            <STr>
              <STh>{judges.judges_name[4].name}</STh>
              <STh>{judges.judges_name[3].name}</STh>
              <STh>{judges.judges_name[2].name}</STh>
              <STh>{judges.judges_name[1].name}</STh>
              <STh>{judges.judges_name[0].name}</STh>
              <STh>国民</STh>
              <STh>あなた</STh>
            </STr>
          </Thead>
          <Tbody>
            <STr>
              <STd>{judgeResults2[4].score}</STd>
              <STd>{judgeResults2[3].score}</STd>
              <STd>{judgeResults2[2].score}</STd>
              <STd>{judgeResults2[1].score}</STd>
              <STd>{judgeResults2[0].score}</STd>
              <STd>{other.other_results[0].score}</STd>
              <STd>{judgeResults2[50] && judgeResults2[50].score}</STd>
            </STr>
          </Tbody>
        </Table>
      </SBox>
      <SBox>
      <Table size='sm'>
        <Thead>
          <Tr>
            <FTh>{finalists.finalists_name[1].name}</FTh>
          </Tr>
          <STr>
            <STh>{judges.judges_name[4].name}</STh>
            <STh>{judges.judges_name[3].name}</STh>
            <STh>{judges.judges_name[2].name}</STh>
            <STh>{judges.judges_name[1].name}</STh>
            <STh>{judges.judges_name[0].name}</STh>
            <STh>国民</STh>
            <STh>あなた</STh>
          </STr>
        </Thead>
        <Tbody>
          <STr>
            <STd>{judgeResults2[9].score}</STd>
            <STd>{judgeResults2[8].score}</STd>
            <STd>{judgeResults2[7].score}</STd>
            <STd>{judgeResults2[6].score}</STd>
            <STd>{judgeResults2[5].score}</STd>
            <STd>{other.other_results[1].score}</STd>
            <STd>{judgeResults2[51] && judgeResults2[51].score}</STd>
          </STr>
        </Tbody>
      </Table>
      </SBox>
      <SBox>
      <Table size='sm'>
        <Thead>
          <Tr>
            <FTh>{finalists.finalists_name[2].name}</FTh>
          </Tr>
          <STr>
            <STh>{judges.judges_name[4].name}</STh>
            <STh>{judges.judges_name[3].name}</STh>
            <STh>{judges.judges_name[2].name}</STh>
            <STh>{judges.judges_name[1].name}</STh>
            <STh>{judges.judges_name[0].name}</STh>
            <STh>国民</STh>
            <STh>あなた</STh>
          </STr>
        </Thead>
        <Tbody>
          <STr>
            <STd>{judgeResults2[14].score}</STd>
            <STd>{judgeResults2[13].score}</STd>
            <STd>{judgeResults2[12].score}</STd>
            <STd>{judgeResults2[11].score}</STd>
            <STd>{judgeResults2[10].score}</STd>
            <STd>{other.other_results[2].score}</STd>
            <STd>{judgeResults2[52] && judgeResults2[52].score}</STd>
          </STr>
        </Tbody>
      </Table>
      </SBox>
      <SBox>
      <Table size='sm'>
        <Thead>
          <Tr>
            <FTh>{finalists.finalists_name[3].name}</FTh>
          </Tr>
          <STr>
            <STh>{judges.judges_name[4].name}</STh>
            <STh>{judges.judges_name[3].name}</STh>
            <STh>{judges.judges_name[2].name}</STh>
            <STh>{judges.judges_name[1].name}</STh>
            <STh>{judges.judges_name[0].name}</STh>
            <STh>国民</STh>
            <STh>あなた</STh>
          </STr>
        </Thead>
        <Tbody>
          <STr>
            <STd>{judgeResults2[19].score}</STd>
            <STd>{judgeResults2[18].score}</STd>
            <STd>{judgeResults2[17].score}</STd>
            <STd>{judgeResults2[16].score}</STd>
            <STd>{judgeResults2[15].score}</STd>
            <STd>{other.other_results[3].score}</STd>
            <STd>{judgeResults2[53] && judgeResults2[53].score}</STd>
          </STr>
        </Tbody>
      </Table>
      </SBox>
      <SBox>
      <Table size='sm'>
        <Thead>
          <Tr>
            <FTh>{finalists.finalists_name[4].name}</FTh>
          </Tr>
          <STr>
            <STh>{judges.judges_name[4].name}</STh>
            <STh>{judges.judges_name[3].name}</STh>
            <STh>{judges.judges_name[2].name}</STh>
            <STh>{judges.judges_name[1].name}</STh>
            <STh>{judges.judges_name[0].name}</STh>
            <STh>国民</STh>
            <STh>あなた</STh>
          </STr>
        </Thead>
        <Tbody>
          <STr>
            <STd>{judgeResults2[24].score}</STd>
            <STd>{judgeResults2[23].score}</STd>
            <STd>{judgeResults2[22].score}</STd>
            <STd>{judgeResults2[21].score}</STd>
            <STd>{judgeResults2[20].score}</STd>
            <STd>{other.other_results[4].score}</STd>
            <STd>{judgeResults2[54] && judgeResults2[54].score}</STd>
          </STr>
        </Tbody>
      </Table>
      </SBox>
      <SBox>
      <Table size='sm'>
        <Thead>
          <Tr>
            <FTh>{finalists.finalists_name[5].name}</FTh>
          </Tr>
          <STr>
            <STh>{judges.judges_name[4].name}</STh>
            <STh>{judges.judges_name[3].name}</STh>
            <STh>{judges.judges_name[2].name}</STh>
            <STh>{judges.judges_name[1].name}</STh>
            <STh>{judges.judges_name[0].name}</STh>
            <STh>国民</STh>
            <STh>あなた</STh>
          </STr>
        </Thead>
        <Tbody>
          <STr>
            <STd>{judgeResults2[29].score}</STd>
            <STd>{judgeResults2[28].score}</STd>
            <STd>{judgeResults2[27].score}</STd>
            <STd>{judgeResults2[26].score}</STd>
            <STd>{judgeResults2[25].score}</STd>
            <STd>{other.other_results[5].score}</STd>
            <STd>{judgeResults2[55] && judgeResults2[55].score}</STd>
          </STr>
        </Tbody>
      </Table>
      </SBox>
      <SBox>
      <Table size='sm'>
        <Thead>
          <Tr>
            <FTh>{finalists.finalists_name[6].name}</FTh>
          </Tr>
          <STr>
            <STh>{judges.judges_name[4].name}</STh>
            <STh>{judges.judges_name[3].name}</STh>
            <STh>{judges.judges_name[2].name}</STh>
            <STh>{judges.judges_name[1].name}</STh>
            <STh>{judges.judges_name[0].name}</STh>
            <STh>国民</STh>
            <STh>あなた</STh>
          </STr>
        </Thead>
        <Tbody>
          <STr>
            <STd>{judgeResults2[34].score}</STd>
            <STd>{judgeResults2[33].score}</STd>
            <STd>{judgeResults2[32].score}</STd>
            <STd>{judgeResults2[31].score}</STd>
            <STd>{judgeResults2[30].score}</STd>
            <STd>{other.other_results[6].score}</STd>
            <STd>{judgeResults2[56] && judgeResults2[56].score}</STd>
          </STr>
        </Tbody>
      </Table>
      </SBox>
      <SBox>
      <Table size='sm'>
        <Thead>
          <Tr>
            <FTh>{finalists.finalists_name[7].name}</FTh>
          </Tr>
          <STr>
            <STh>{judges.judges_name[4].name}</STh>
            <STh>{judges.judges_name[3].name}</STh>
            <STh>{judges.judges_name[2].name}</STh>
            <STh>{judges.judges_name[1].name}</STh>
            <STh>{judges.judges_name[0].name}</STh>
            <STh>国民</STh>
            <STh>あなた</STh>
          </STr>
        </Thead>
        <Tbody>
          <STr>
            <STd>{judgeResults2[39].score}</STd>
            <STd>{judgeResults2[38].score}</STd>
            <STd>{judgeResults2[37].score}</STd>
            <STd>{judgeResults2[36].score}</STd>
            <STd>{judgeResults2[35].score}</STd>
            <STd>{other.other_results[7].score}</STd>
            <STd>{judgeResults2[57] && judgeResults2[57].score}</STd>
          </STr>
        </Tbody>
      </Table>
      </SBox>
      <SBox>
      <Table size='sm'>
        <Thead>
          <Tr>
            <FTh>{finalists.finalists_name[8].name}</FTh>
          </Tr>
          <STr>
            <STh>{judges.judges_name[4].name}</STh>
            <STh>{judges.judges_name[3].name}</STh>
            <STh>{judges.judges_name[2].name}</STh>
            <STh>{judges.judges_name[1].name}</STh>
            <STh>{judges.judges_name[0].name}</STh>
            <STh>国民</STh>
            <STh>あなた</STh>
          </STr>
        </Thead>
        <Tbody>
          <STr>
            <STd>{judgeResults2[44].score}</STd>
            <STd>{judgeResults2[43].score}</STd>
            <STd>{judgeResults2[42].score}</STd>
            <STd>{judgeResults2[41].score}</STd>
            <STd>{judgeResults2[40].score}</STd>
            <STd>{other.other_results[8].score}</STd>
            <STd>{judgeResults2[58] && judgeResults2[58].score}</STd>
          </STr>
        </Tbody>
      </Table>
      </SBox>
      <SBox>
      <Table size='sm'>
        <Thead>
          <Tr>
            <FTh>{finalists.finalists_name[9].name}</FTh>
          </Tr>
          <STr>
            <STh>{judges.judges_name[4].name}</STh>
            <STh>{judges.judges_name[3].name}</STh>
            <STh>{judges.judges_name[2].name}</STh>
            <STh>{judges.judges_name[1].name}</STh>
            <STh>{judges.judges_name[0].name}</STh>
            <STh>国民</STh>
            <STh>あなた</STh>
          </STr>
        </Thead>
        <Tbody>
          <STr>
            <STd>{judgeResults2[49].score}</STd>
            <STd>{judgeResults2[48].score}</STd>
            <STd>{judgeResults2[47].score}</STd>
            <STd>{judgeResults2[46].score}</STd>
            <STd>{judgeResults2[45].score}</STd>
            <STd>{other.other_results[9].score}</STd>
            <STd>{judgeResults2[59] && judgeResults2[59].score}</STd>
          </STr>
        </Tbody>
      </Table>
      </SBox>
    </Container>
    </>
  )
});