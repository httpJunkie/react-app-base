import React, { useState, useEffect, createContext } from 'react'
import { useMediaPredicate } from 'react-media-hook'

const AppContext = createContext()

const AppProvider = props => {
  const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  const [appData, setApp] = useState({

    navOpen: false,
    toggleSidenav: value => setApp(data => (
      { ...data, navOpen: value }
    )),

    theme: localStorage.getItem('react-starter-theme') || preferredTheme,
    changeTheme: mode => setApp(data => (
      {...data, theme: mode }
    ))
    
  })

  useEffect(() => {
    localStorage.setItem('react-starter-theme', appData.theme)
    }, [appData.theme]
  )
  
  return <AppContext.Provider value={appData}>{props.children}</AppContext.Provider>
}

export { AppContext, AppProvider }