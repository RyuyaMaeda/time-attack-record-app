/**
 * node_modules
 */
import { memo } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
  Heading,
} from "@chakra-ui/react";
/**
 * project modules
 */

/**
 * private modules
 */

/**
 * props
 */
export type Props = never;

/**
 * MonsterList Component
 */
export const MonsterList: React.FC<Props> = memo((): JSX.Element => {
  return (
    <VStack spacing="100px" direction="row" justify="start">
      <Heading float="left">モンスター一覧</Heading>
      <TableContainer width="100%">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>モンスター</Th>
              <Th>大剣</Th>
              <Th>太刀</Th>
              <Th>片手</Th>
              <Th>双剣</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>ドスランポス</Td>
              <Td>●</Td>
              <Td>●</Td>
              <Td>●</Td>
              <Td>●</Td>
            </Tr>
            <Tr>
              <Td>バサルモス</Td>
              <Td>●</Td>
              <Td> </Td>
              <Td> </Td>
              <Td> </Td>
            </Tr>
            <Tr>
              <Td>テオテスカトル</Td>
              <Td>●</Td>
              <Td>●</Td>
              <Td>●</Td>
              <Td>●</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
});
