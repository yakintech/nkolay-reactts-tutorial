import React, { useContext } from 'react'
import { FavoritesContext, FavoritesContextType } from '../../../context/FavoritesContext'

function Dashboard() {

  const { favorites } = useContext(FavoritesContext) as FavoritesContextType

  return (<>

    <div>Dashboard Page</div>
    <h1 style={{fontSize:40}}>Length: {favorites.length}</h1>
  </>
  )
}

export default Dashboard