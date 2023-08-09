import React from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Input, IconButton, Heading } from "@chakra-ui/react";

export const InputItems = ({ newTodo, handleInputChange, handleAddTodo }) => {
  return (
    <Box display={"flex"} gap={"5px"} justifyContent={"center"}>
      <Input
        borderColor={"white"}
        placeholder={"Enter Your Things To Do"}
        color={"white"}
        width={"500px"}
        value={newTodo}
        onChange={handleInputChange}
      />
      <IconButton
        onClick={handleAddTodo}
        backgroundColor={"white"}
        aria-label="Search database"
        icon={<AddIcon />}
      />
    </Box>
  );
};
