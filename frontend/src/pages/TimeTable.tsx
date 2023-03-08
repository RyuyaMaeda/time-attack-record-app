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
export type Props = unknown;

/**
 * TimeTable Component
 */
export const TimeTable: React.FC<Props> = memo((): JSX.Element => {
  return (
    <>
      <Heading>テオ・テスカトル</Heading>
      <VStack spacing="100px" direction="row">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th colSpan={6} textAlign="center">
                  大剣
                </Th>
              </Tr>
              <Tr>
                <Th>順位</Th>
                <Th>武器名</Th>
                <Th>タイム</Th>
                <Th>スキル</Th>
                <Th>食事</Th>
                <Th>HN</Th>
                <Th>備考</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1位</Td>
                <Td>ブラックミラブレイド</Td>
                <Td>08:28</Td>
                <Td>金剛体 真打 抜刀術【技】 弱点特効 集中</Td>
                <Td>ネコの毛づくろい上手 ネコの防御術【大】</Td>
                <Td>yosshi</Td>
                <Td>画像</Td>
              </Tr>
              <Tr>
                <Td>2位</Td>
                <Td>ブラックミラブレイド</Td>
                <Td>08:28</Td>
                <Td>金剛体 真打 抜刀術【技】 弱点特効 集中</Td>
                <Td>ネコの弱いの来い! ネコのKO術</Td>
                <Td>灰猫</Td>
                <Td>画像</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th colSpan={6} textAlign="center">
                  太刀
                </Th>
              </Tr>
              <Tr>
                <Th>順位</Th>
                <Th>武器名</Th>
                <Th>タイム</Th>
                <Th>スキル</Th>
                <Th>食事</Th>
                <Th>HN</Th>
                <Th>備考</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1位</Td>
                <Td>蛇帝刀ネポスマデュラ</Td>
                <Td>10:27</Td>
                <Td>金剛体 真打 抜刀術【技】 弱点特効 集中</Td>
                <Td>ネコの毛づくろい上手 ネコの防御術【大】</Td>
                <Td>yosshi</Td>
                <Td>画像</Td>
              </Tr>
              <Tr>
                <Td>2位</Td>
                <Td>蛇帝刀ネポスマデュラ</Td>
                <Td>10:53</Td>
                <Td>金剛体 真打 抜刀術【技】 弱点特効 集中</Td>
                <Td>ネコの弱いの来い! ネコのKO術</Td>
                <Td>灰猫</Td>
                <Td>画像</Td>
              </Tr>
              <Tr>
                <Td>2位</Td>
                <Td>蛇帝刀ネポスマデュラ</Td>
                <Td>11:05</Td>
                <Td>金剛体 真打 抜刀術【技】 弱点特効 集中</Td>
                <Td>ネコの弱いの来い! ネコのKO術</Td>
                <Td>デュース</Td>
                <Td>画像</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th colSpan={6} textAlign="center">
                  片手剣
                </Th>
              </Tr>
              <Tr>
                <Th>順位</Th>
                <Th>武器名</Th>
                <Th>タイム</Th>
                <Th>スキル</Th>
                <Th>食事</Th>
                <Th>HN</Th>
                <Th>備考</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1位</Td>
                <Td>ミストラル＝ダオラ</Td>
                <Td>10:08</Td>
                <Td>金剛体 真打 抜刀術【技】 弱点特効 集中</Td>
                <Td>ネコの毛づくろい上手 ネコの防御術【大】</Td>
                <Td>けふぃあ</Td>
                <Td>画像</Td>
              </Tr>
              <Tr>
                <Td>2位</Td>
                <Td>ミストラル＝ダオラ</Td>
                <Td>10:10</Td>
                <Td>金剛体 真打 抜刀術【技】 弱点特効 集中</Td>
                <Td>ネコの弱いの来い! ネコのKO術</Td>
                <Td>ASUKA</Td>
                <Td>画像</Td>
              </Tr>
              <Tr>
                <Td>3位</Td>
                <Td>ミストラル＝ダオラ</Td>
                <Td>10:19</Td>
                <Td>金剛体 真打 抜刀術【技】 弱点特効 集中</Td>
                <Td>ネコの弱いの来い! ネコのKO術</Td>
                <Td>chino</Td>
                <Td>画像</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th colSpan={6} textAlign="center">
                  双剣
                </Th>
              </Tr>
              <Tr>
                <Th>順位</Th>
                <Th>武器名</Th>
                <Th>タイム</Th>
                <Th>スキル</Th>
                <Th>食事</Th>
                <Th>HN</Th>
                <Th>備考</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1位</Td>
                <Td>THEシャングリラ</Td>
                <Td>9:31</Td>
                <Td>金剛体 真打 抜刀術【技】 弱点特効 集中</Td>
                <Td>ネコの毛づくろい上手 ネコの防御術【大】</Td>
                <Td>クリスピー</Td>
                <Td>画像</Td>
              </Tr>
              <Tr>
                <Td>2位</Td>
                <Td>真・双滅龍刃[黄昏]</Td>
                <Td>10:16</Td>
                <Td>金剛体 真打 抜刀術【技】 弱点特効 集中</Td>
                <Td>ネコの弱いの来い! ネコのKO術</Td>
                <Td>マラスロッター</Td>
                <Td>画像</Td>
              </Tr>
              <Tr>
                <Td>3位</Td>
                <Td>双竜神[黒天白夜]</Td>
                <Td>10:26</Td>
                <Td>金剛体 真打 抜刀術【技】 弱点特効 集中</Td>
                <Td>ネコの弱いの来い! ネコのKO術</Td>
                <Td>ASUKA</Td>
                <Td>画像</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </>
  );
});
