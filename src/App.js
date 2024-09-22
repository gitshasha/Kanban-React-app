import "./App.css";

import { Route, Routes } from "react-router-dom";
import Kan from "./components/KanbanCompo/Kan";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import Nav from "./components/Nav";
function App() {
  return (
        <Routes>
          <Route path="/" element={<Kan />}></Route>
        </Routes>
    
  );
}

export default App;
