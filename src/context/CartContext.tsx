import { createContext, useState } from "react";

export const CartContext = createContext<CartContextType>({} as CartContextType)


export const CartContextProvider = ({ children }: any) => {

    const [cart, setcart] = useState<CartItem[]>([]);


    const addToCart = (product: any) => {
        
        //Öncelikle sepette ürün var mı kontrol et
        let cartItem = cart.find((item) => item.id === product.id);

        if(cartItem){
            //Sepette ürün var ise
            cartItem.quantity += 1;
            setcart([...cart]);
        }
        else{
            //Sepette ürün yok ise
            let newCartItem : CartItem = {
                id: product.id,
                name: product.name,
                price: product.unitPrice,
                quantity: 1
            }
            setcart([...cart, newCartItem]);
        }

    }

    const removeFromCart = (id: number) => {
        let filteredCart = cart.filter((item) => item.id !== id);
        setcart(filteredCart);
    }

    const clearCart = () => {
        setcart([]);
    }

    //getCartTotalPrice
    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }

    return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}>
        {children}
    </CartContext.Provider>
    

}


export type CartContextType = {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
}




export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}