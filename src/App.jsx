// hooks
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// routes
import Home from "./routes/Home.jsx";
import Pedido from "./routes/Pedido.jsx";
// style
import { Box } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Box width="100vw" bg="gray.100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="pedido" element={<Pedido />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
