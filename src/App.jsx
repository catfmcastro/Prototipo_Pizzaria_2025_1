// hooks
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// routes
import Home from "./routes/Home.jsx";
import Pedido from "./routes/Pedido.jsx";
import Cardapio from "./routes/Cardapio.jsx";
import Perfil from "./routes/Perfil.jsx"
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
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="perfil" element={<Perfil />}/>
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
