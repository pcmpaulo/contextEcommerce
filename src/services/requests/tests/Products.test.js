import { listProducts } from '../products'
import api from '../../api'

jest.mock('../../api');

const mock_product = {
  "imagem": 4,
  "texto": "Mesa chique",
  "preco": 200,
  "id": 1
}

const mock_products = [mock_product]

const mockRequest = (response) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: response
      })
    }, 200);
  });
};

const mockFailRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  });
};

describe("Test products", () => {

  beforeEach(() => {
    api.get.mockClear();
  })

  describe("Test listProducts", () => {
    it("Should list products", async () => {
      api.get.mockImplementation(() => mockRequest(mock_products))
      const response = await listProducts();

      expect(api.get).toHaveBeenCalledWith('products')
      expect(api.get).toHaveBeenCalledTimes(1);
      expect(response).toEqual(mock_products);
    })

    it("Should not list products due error", async () => {
      api.get.mockImplementation(() => mockFailRequest())

      const response = await listProducts();

      expect(api.get).toHaveBeenCalledWith('products')
      expect(api.get).toHaveBeenCalledTimes(1);
      expect(response).toEqual([]);
    })
  })
})
