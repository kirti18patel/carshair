import React from 'react'
import '../../assets/stylesheet/navbar.css'
import logo from "../../assets/images/CarSHAiR-Logo.png"

const Nav = () => {
    return (
    <nav className="shadow-md w-full p-3 navbar flex flex-center justify-between z-50">
        <div className="logo lg:w-1/12 w-1/5 h-5/6" >
            <img src={logo} alt= "carshair logo" className="w-full h-full"/>
        </div>
        <div className="lg:w-1/4 w-2/4 flex flex-center justify-around items-center">
            <a href="/" className="no-underline font-light lg:text-2xl text-sm">Rent a Car</a>
            <a href="/" className="no-underline font-light lg:text-2xl text-sm">List a Car</a>
            <button className="menu cursor-pointer border-none lg:text-2xl text-sm">
                <i className="fa fa-bars" aria-hidden="true"></i></button>
        </div>
    </nav>
    )
}

export default Nav
