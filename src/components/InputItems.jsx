import React from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Input, IconButton, Heading } from "@chakra-ui/react";

export const InputItems = ({ newTodo, handleInputChange, handleAddTodo }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita que el formulario se envíe
      handleAddTodo();
    }
  };

  return (
    <Box display={"flex"} gap={"5px"} justifyContent={"center"}>
      <Input
        borderColor={"white"}
        placeholder={"Enter Your Things To Do"}
        color={"white"}
        width={"500px"}
        value={newTodo}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Funcion para teclas, que al dar Enter se agregue la Tarea
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
