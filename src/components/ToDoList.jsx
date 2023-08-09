import React from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  IconButton,
  Text,
} from "@chakra-ui/react";
import "../components/index.css";
import { useState, useEffect } from "react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

import { v4 as uuidv4 } from "uuid"; // Importando Funcion para generar un id

import Swal from "sweetalert2"; //Importando un sistema de alerta

// Importando Componentes
import { ListItems } from "./ListItems";
import { InputItems } from "./InputItems";
import { Title } from "./Title";
export const ToDoList = () => {
  // const [todos, setTodos] = useState([]);

  //creando un hook con su localstorage
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // UseState para el input
  const [newTodo, setNewTodo] = useState("");

  // localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: uuidv4(), text: newTodo }]);
      Swal.fire("Tarea Agregada", " ", "success");
      setNewTodo(""); // Reiniciar input
    } else {
      Swal.fire("Favor Ingresar Tareas Validas", "Ejemplo: Cocinar", "error");
    }
  };

  const handleDeleteTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    Swal.fire(
      "Tarea Terminada",
      "Felicidades has eliminado tu tarea",
      "success"
    );
    setTodos(updateTodos);
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      backgroundColor={"purple"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display={"column"}
        justifyContent={"center"}
        width={["80%", "50%", "80%"]}
        gap={"5px"}
        marginTop={"5px"}
        marginBottom={"5px"}
      >
        {/* Componente del Titulo "To-Do List" */}
        <Title />

        <InputItems
          newTodo={newTodo}
          handleInputChange={handleInputChange}
          handleAddTodo={handleAddTodo}
        />
      </Box>

      <ListItems todos={todos} handleDeleteTodo={handleDeleteTodo} />

      <Text
        marginTop={["50px", "20px", "20px"]}
        color={"whiteAlpha.900"}
        opacity={"0.2"}
      >
        Made by Hazley
      </Text>
    </Box>
  );
};
