/**
 * node_modules
 */
import { memo } from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
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
 * MainLayout Component
 */
export const MainLayout: React.FC<Props> = memo(
  ({ children }: Props): JSX.Element => {
    return (
      <>
        <Flex
          as="header"
          wrap="wrap"
          padding={4}
          bg="blue.500"
          color="white"
          justify="space-between"
        >
          <Heading>Time Attack App</Heading>
        </Flex>
        <Box p={4} minWidth="1000px">
          {children}
        </Box>
      </>
    );
  }
);
