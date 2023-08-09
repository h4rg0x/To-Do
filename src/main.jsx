import React from "react";
import ReactDOM from "react-dom/client";
import { ToDoList } from "./components/ToDoList";

import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ToDoList />
    </ChakraProvider>
  </React.StrictMode>
);
