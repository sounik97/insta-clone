import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className="app_header">
            <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2017/02/instagram-logo.jpg" alt="" />
            <input className="search_input" placeholder="Search" />
            <button>ok</button>
        </div>
    )
}
