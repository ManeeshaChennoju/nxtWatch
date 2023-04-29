import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  onClickChangeTheme: () => {},
})

export default ThemeContext
