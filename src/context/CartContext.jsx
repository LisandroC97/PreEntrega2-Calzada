import { createContext, useState } from "react";

export const CartContext = createContext([])
export const CartProvider=({children}) => {
    const [items, setItems]=useState([])

    const addItem= (product, quantity) => setItems(prev=>[...prev,{...product,quantity}])

    const removeItem=(id)=>{
        const itemsFiltered=items.filter(item=>item.id!==id)
        setItems(itemsFiltered)
    }

    const clear=()=>setItems([])

    const totalWidget= items.reduce((sum,value)=>sum + value.quantity,0)
        
    console.log(totalWidget)
    console.log(items)
    return (
        <CartContext.Provider value={{items, addItem,removeItem,clear,totalWidget}}>
        {children}
        </CartContext.Provider>)
}