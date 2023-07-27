import React from 'react'
import { ProductProvider } from '../ProductsContext'
import { listProducts } from '../../services/requests/products'
import { render } from '@testing-library/react-native'

jest.mock('../../services/requests/products');

const mock_product = {
  "imagem": 4,
  "texto": "Mesa chique",
  "preco": 200,
  "id": 1
}

const mock_products = [mock_product]

describe("Test ProductContext", () => {

  beforeEach(() => {
    listProducts.mockClear();
  })

  describe("Test useEffect", () => {
    it("Should fill properties products and productQuantity", async () => {
      const { getByPlaceholderText } = render(<ProductProvider children={<></>}/>);
    })
  })
})
