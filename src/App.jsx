// hooks
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// routes
import Home from "./routes/Home.jsx";
import Pedido from "./routes/Pedido.jsx";
// style
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box width="100vw">
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
