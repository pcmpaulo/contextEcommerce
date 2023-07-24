import api from '../api';

export async function listProducts() {
  try {
    const response = await api.get(`products`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function updateProduct(id, data) {
  try {
    const response = await api.put(`products/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export async function deleteProduct(id) {
  try {
    const response = await api.delete(`products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export async function createProduct(data) {
  try {
    const response = await api.post('products', data);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
}
