import {CartIconContainer, ItemCount} from "./cart-icon.styles.jsx"

import { useContext } from "react"
import { CartContext } from "../../context/cart.context"

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon
