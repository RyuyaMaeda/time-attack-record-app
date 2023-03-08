/**
 * node_modules
 */
import { memo } from "react";
import { Flex, Box, Heading, HStack, Container } from "@chakra-ui/react";
/**
 * project modules
 */
import { SideMenu } from "./SideMenu";
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
      <Container maxWidth="3000px" height="1500px">
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
        <HStack spacing={3} align="start" height="100%" width="100%">
          <SideMenu />
          <Box>
            <Box p={6} width="1000px">
              {children}
            </Box>
          </Box>
        </HStack>
      </Container>
    );
  }
);
