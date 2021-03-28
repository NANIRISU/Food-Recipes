import React from 'react'
import Books from '../books/Books'
import Header from '../Header/Header'


import './Main.css'
const Main = () => {
    return (
        <div className="main-container">
            <Header/>
            
            <Books/>
        </div>
    )
}

export default Main
