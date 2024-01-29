import React, { useContext } from 'react'
import { FavoritesContext, FavoritesContextType } from '../../../context/FavoritesContext'

function Favorites() {

  //contexte bağlanıp favorites'ı aldım
   const {favorites, removeFavorites, emptyFavorites} = useContext(FavoritesContext) as FavoritesContextType
    
  return (<>
    <h1>Favorites</h1>
    <h3>Length: {favorites.length}</h3>
    <button  onClick={() => emptyFavorites()}>Empty</button>

    <ul style={{display:'flex', flexDirection:'column'}}>
      {favorites.map((favorite : any) => (

       <div>
        <li>{favorite.name}</li>
        <button onClick={() => removeFavorites(favorite)}>Remove</button>
       </div>

      ))}
    </ul>
  
  </>)
}

export default Favorites