import React from 'react'
import MainMenu from '../molecules/header/MainMenu'
import Logo from '../molecules/header/Logo'

const MainHeader = () => {
  return (
    <div>
      <div>
        <Logo />
        <MainMenu/>
      </div>
    </div>
  )
}

export default MainHeader
