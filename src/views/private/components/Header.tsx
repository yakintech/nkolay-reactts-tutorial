import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { CartContext } from '../../../context/CartContext'

function Header() {

    const { cart } = useContext(CartContext)

    return (<>
        <nav>
            <h1>NKolay</h1>
            <ul>
                <li><Link to='/'>Dashboard</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/suppliers'>Suppliers</Link> </li>
                <li><Link to='/favorites'>Favorites</Link> </li>
                <li>
                    <Link to='/cart'>Cart (<span style={{ color: 'red' }}>{cart.length}</span>)</Link>
                </li>
            </ul>
        </nav>

    </>
    )
}


export default Header