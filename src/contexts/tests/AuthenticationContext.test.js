import { AuthProvider, checkCredentials } from '../AuthenticationContext'

describe("Test AuthenticationContext", () => {

  describe("Test checkCredentials", () => {
    it("Should return true when credentials are valid", () => {
      const response = checkCredentials('1', '123');

      expect(response).toBe(true);
    })

    it("Should return false when credentials are invalid", () => {
      const response = checkCredentials('wrong email', '123');

      expect(response).toBe(false);
    })
  })
})
