import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      mx="auto"
      my="0"
      width="80%"
      justifyContent="center"
      height={[20, 100]}
    >
      <Image width={[40, 300]} src="/images/logo.svg" alt="world trip" />
    </Flex>
  );
}
