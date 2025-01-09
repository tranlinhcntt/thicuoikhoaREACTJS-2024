import axios from 'axios';

const apiUrl = 'http://localhost:3100/products';

export const getProducts = () => axios.get(apiUrl);
export const getProductById = (id) => axios.get(`${apiUrl}/${id}`);
export const addProduct = (product) => axios.post(apiUrl, product);
export const updateProduct = (id, product) => axios.put(`${apiUrl}/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${apiUrl}/${id}`);
