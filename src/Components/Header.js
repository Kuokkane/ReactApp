import React from 'react'
import Navigation from './Navigation'


function Header() {
    return (

        <header
            className="border-b bg-teal-800 font-bold p-3 flex justify-between items-center">
            <span className="font-bold text-4xl">
                Header
           </span>
            <Navigation />
        </header>



    )
}

export default Header