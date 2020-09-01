import React from 'react'

const About = (props) => {
  document.title = 'About Page'
  const isLight = props.theme === 'light'

  return (
    <>
    <p>{isLight}</p>
      <h4 style={{ textAlign: isLight ? 'left' : 'right' }}>The theme is {isLight ? 'LIGHT' : 'DARK'}</h4>
    </>
  )
}

export default About