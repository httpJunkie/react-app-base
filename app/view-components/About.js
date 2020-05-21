import React from 'react'
import './About.scss'

const About = (props) => {
  document.title = `Delete Me`
  const isLight = props.theme === 'light'

  return (
    <>
    <p>{isLight}</p>
      <h4 style={{ textAlign: isLight ? 'left' : 'right' }}>The theme is {isLight ? 'LIGHT' : 'DARK'}</h4>
    </>
  )
}

export default About