import logo from "./logo.svg";

import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import Student from "./Student";
import { BrowserRouter } from "react-router-dom";
import Login from "./Welcome";
import Proflogin from "./Proflogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/studentlogin" element={<Student />} />
        <Route path="/proflogin" element={<Proflogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
