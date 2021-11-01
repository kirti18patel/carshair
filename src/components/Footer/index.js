import React from 'react'
import logo from './../../assets/images/CarSHAiR-Logo-Wht.png'

const Footer = () => {
    return (
    <footer className="flex flex-col items-center justify-around lg:p-20 p-4">
        <div className="lg:w-1/12 w-1/4 lg:m-4 m-2">
            <img src={logo} class="img-fluid" alt="logo in footer"/>
        </div>
        <p className="lg:text-md text-sm">Copyright &copy; SHAiR Your Car with Kirti 2021. Designed by Kirti as a carSHAiR tech assignment. All rights reserved.</p>
    </footer>
    )
}

export default Footer
