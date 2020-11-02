import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'
import { GlobalStyled } from './styles/GlobalStyles'

export const App = () => {
  return (
    <>
      <Logo />
      <GlobalStyled />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  )
}
