import { createContext, useState } from "react";


export const FavoritesContext = createContext<FavoritesContextType | null>(null)

export const FavoritesProvider = ({ children }: any) => {

    const [favorites, setfavorites] = useState<any>([])

    const addFavorites = (item: any) => {
        //favorites içinde item varsa ekleme

        var favCheck = favorites.find((x: any) => x.id === item.id)

        if(favCheck){
            alert('Bu ürün zaten favorilerinizde')
            return
        }

        setfavorites([...favorites, item])
    }

    const removeFavorites = (item: any) => {
        setfavorites(favorites.filter((favorite: any) => favorite.id !== item.id))
    }

    const emptyFavorites = () => {
        setfavorites([])
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorites, removeFavorites, emptyFavorites }}>
            {children}
        </FavoritesContext.Provider>
    )

}

export type FavoritesContextType = {
    favorites: any[],
    addFavorites: (item: any) => void,
    removeFavorites: (item: any) => void,
    emptyFavorites: () => void,
}




