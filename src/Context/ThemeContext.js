import React from 'react'

const ThemeContext = React.createContext({
  activeTheme: 'light',
  savedItems: [],
  changeTheme: () => {},
  addSave: () => {},
  removeSave: () => {},
})

export default ThemeContext
