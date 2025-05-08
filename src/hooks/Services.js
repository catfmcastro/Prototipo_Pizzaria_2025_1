import axios from "axios";

// todo get pedido
// todo post pedido
// todo get pagamento

// get itens
export const getItens = async () => {
    return await axios.get (`http://localhost:8080/item`);
}

// get user
export const getUser = async () => {
    return await axios.get(`http://localhost:8080/usuario`);
}

// get pedido
export const getPedido = async () => {
    return await axios.get(`http://localhost:8080/pedido`);
}

// get endereco
export const getEndereco = async () => {
  return await axios.get(`http://localhost:8080/endereco`);
};

// get pagamento
export const getPagamento = async () => {
  return await axios.get(`http://localhost:8080/pagamento`);
};