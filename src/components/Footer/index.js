import React from 'react'

const Footer = () => {
    return (
    <nav className="mx-2 shadow-md w-full p-3 navbar flex flex-center justify-between z-50">
        <div className="logo w-1/12 h-full" >
            <img src={logo} alt= "carshair logo" className="w-full h-full"/>
        </div>
        <div className="w-1/4 flex flex-center justify-around items-center">
            <a href="#" className="no-underline font-light text-2xl">Rent a Car</a>
            <a href="#" className="no-underline font-light text-2xl">List a Car</a>
            <button className="menu cursor-pointer border-none text-2xl">
                <i className="fa fa-bars" aria-hidden="true"></i></button>
        </div>
    </nav>
    )
}

export default Footer
