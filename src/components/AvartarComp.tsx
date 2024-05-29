import { Avatar, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const nickname = "calvin";

const AvartarComp: FC = () => {
  return (
    <Flex alignItems="center" gap={2}>
      <Avatar name={nickname} src="/images/believeBudda.png" />
      <Text fontSize={48} fontWeight="semibold">
        {nickname}
      </Text>
    </Flex>
  );
};

export default AvartarComp;