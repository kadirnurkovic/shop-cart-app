import React from 'react'
import '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopCartContext } from '../Context/ShopCartContext';
import { useContext } from 'react';

export default function Icon() {
    const { cartItems } = useContext(ShopCartContext)
    return (
        <div>
            <ShoppingCartIcon></ShoppingCartIcon>
            {cartItems.length}
        </div>
    )
}