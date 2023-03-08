/**
 * node_modules
 */
import { memo } from "react";
import { VStack, Link } from "@chakra-ui/react";
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
 * SideMenu Component
 */
export const SideMenu: React.FC<Props> = memo((): JSX.Element => {
  return (
    <VStack height="100%" backgroundColor="gray.300" spacing={3} padding={3}>
      <Link href="/">トップページ</Link>
      <Link href="/monsterlist">モンスター一覧</Link>
    </VStack>
  );
});
