import { createContext, useState } from 'react'

export const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [user, setUser] = useState({});

  function login(email, password) {
    const auth = checkCredentials()
    if (auth) {
      setUser({
        name: 'Paulo',
        email: 'paulo@gmail.com',
        address: 'Pantano do Sul',
        phoneNumber: '48999303089'
      })
    }
    return auth
  }

  return (
    <AuthContext.Provider value={{
      user,
      login
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function checkCredentials(email, password) {
  return (email === '1' && password === '123')
}
