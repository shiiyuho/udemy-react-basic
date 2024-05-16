import {
  VStack,
  StackDivider,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";

// POINT react-iconsからアイコンをインポート
import { VscCheck } from "react-icons/vsc";

const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  return (
    //styleの定義
    <VStack
      divider={<StackDivider />}
      width="80%"
      bgColor="white"
      //         スマホ　　　　　ipadなど
      // color={{ sm: 'red.600', md: 'blue.600', lg: 'green.500', xl: 'red.600' }}
      //[Alpha]を付けると色にフィルターがつく（CSS変数）
      borderColor="blackAlpha.100"
      borderWidth="1px"
      borderRadius="3px" //border-radius
      p={5} //padding
      alignItems="start"
    >
      {todos.map((todo) => {
        return (
          <HStack key={todo.id} spacing="5">
            <IconButton
              onClick={() => complete(todo.id)}
              //アイコン読み込み
              icon={<VscCheck />}
              //アイコンが丸くなる
              isRound
              //back-ground
              bgColor="cyan.100"
              opacity="0.5"
            >
              完了
            </IconButton>
            {/* <span></span>➡<Text></Text> */}
            <Text>{todo.content}</Text>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default List;
