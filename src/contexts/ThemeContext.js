import { createContext, useEffect, useState } from 'react'
import { darkTheme, defaultTheme, lightTheme } from '../estilosGlobais'
import { template } from '@babel/core'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const ThemeContext = createContext({});

export function ThemeProvider({children}) {
  const [actualTheme, setActualTheme] = useState('dark');

  const themes = {
    'default': defaultTheme,
    'dark': darkTheme,
    'light': lightTheme,
  }

  useEffect(() => {
    async function loadTheme() {
      const theme = await AsyncStorage.getItem('theme');
      if (theme) {
        setActualTheme(theme);
      }
    }
    loadTheme();
  }, [])

  async function saveTheme(theme) {
    await AsyncStorage.setItem('theme', theme);
    setActualTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{
      actualTheme,
      setActualTheme: saveTheme,
      selectedTheme: themes[actualTheme]
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
