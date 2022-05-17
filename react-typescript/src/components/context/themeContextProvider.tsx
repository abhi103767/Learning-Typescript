import React, { createContext } from 'react'
import { theme } from './theme';
export const ThemeContext = createContext(theme);
type ThemeContextProviderProps = {
  children : React.ReactNode
}

function themeContext({children} : ThemeContextProviderProps) {

 return (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
 )
}

export default themeContext