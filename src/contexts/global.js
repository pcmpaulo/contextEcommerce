import { createContext } from 'react'

export const GlobalContext = createContext({});

const valueNumber = 150;

export function InfoProvider({children}) {
  return (
    <GlobalContext.Provider value={{
      valueNumber
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
