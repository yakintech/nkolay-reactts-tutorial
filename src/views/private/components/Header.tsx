import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Header() {
    return (<>
        <nav>
            <h1>NKolay</h1>
            <ul>
                <li><Link to='/'>Dashboard</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/suppliers'>Suppliers</Link> </li>
            </ul>
        </nav>

    </>
    )
}

export default Header