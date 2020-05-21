import React from 'react'

import 'normalize.css'
import '@progress/kendo-theme-material/dist/all.css'
import './App.scss'

import { AppProvider } from './context/AppContext'
import Frame from './Frame'

const App = () => {
  return(
    <AppProvider>
      <Frame />
    </AppProvider>
  )
}

export default App