import { Box } from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export const ListItems = ({ todos, handleDeleteTodo }) => {
  return (
    <Box
      width={["80%", "50%", "50%"]}
      height={["60%", "50%", "70%"]}
      className="bgItems"
      // backgroundColor={"white"}
      rounded={"md"}
      shadow={"md"}
      display={"flex"}
      justifyContent={"center"}
      gap={"50%"}
      marginTop={"2px"}
      overflowY={"scroll"}
    >
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <IconButton
              rounded={"50px"}
              marginLeft={"10px"}
              size={"sm"}
              onClick={() => handleDeleteTodo(todo.id)}
              backgroundColor={"red"}
              color={"white"}
              _hover={{ backgroundColor: "#8B0000", color: "white" }}
              aria-label="Search database"
              icon={<DeleteIcon />}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
};
