import { createContext, useState } from 'react'

export const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [user, setUser] = useState({});

  function login(email, password) {
    if (email === '1' && password === '123') {
      setUser({
        name: 'Paulo',
        email: 'paulo@gmail.com',
        address: 'Pantano do Sul',
        phoneNumber: '48999303089'
      })
      return true
    }
    return false
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
