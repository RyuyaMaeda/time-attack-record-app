/**
 * node_modules
 */
import { memo } from "react";
import { Text, Heading, VStack } from "@chakra-ui/react";
/**
 * project modules
 */

/**
 * private modules
 */

/**
 * props
 */
export type Props = {
  /**
   * 子要素
   */
  children?: React.ReactNode;
};

/**
 * Top Component
 */
export const Top: React.FC<Props> = memo(({ children }: Props): JSX.Element => {
  return (
    <VStack textAlign="left" spacing={3}>
      <Heading>はじめにお読みください</Heading>
      <Text fontSize="2xl">
        このアプリは、ta記録のテーブルを自動で集計したいという思いで作りました。
      </Text>
      <Text fontSize="2xl" color="red">
        ※発掘武器を使用したTAは集計していません。
      </Text>
      <Text fontSize="2xl" color="red">
        ※発掘防具は使用可能です。
      </Text>
      <Text fontSize="2xl" color="red">
        ※制限部門だけの集計になります。
      </Text>
      <Text fontSize="2xl">
        護石、装飾品、鎧玉、イベント防具などは全て使用可能です。
      </Text>
      <Text fontSize="2xl">詳しくはルール詳細を読んでください</Text>
    </VStack>
  );
});
