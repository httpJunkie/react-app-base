import React from 'react'
import { RecoilRoot, atom } from 'recoil'

import 'normalize.css'
import '@progress/kendo-theme-material/dist/all.css'
import './App.scss'

//import { AppProvider } from "./context/AppContext"
import Frame from './Frame'

const themeDefault = 
  (localStorage.getItem('spaceXLaunchApp_theme') || preferredTheme)

const navOpenRecoil = atom({
  key: navOpenRecoil,
  default: false
})

const themeRecoil = atom({
  key: themeRecoil,
  default: false
})

const App = () => {
  return(
    <RecoilRoot>
      <Frame />
    </RecoilRoot>
  )
}

export default App