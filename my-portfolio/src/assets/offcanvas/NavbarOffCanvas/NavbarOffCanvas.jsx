import React, { useState } from 'react'
import './NavbarOffCanvas.css'

const NavbarOffCanvas = () => {

    const [firstLink, setfirstLink] = useState('HOME')
    const [secondLink, setsecondLink] = useState('TECH STACKS')
    const [thirdLink, setthirdLink] = useState('WORKS')
    const [fourthLink, setfourthLink] = useState('CONTACTS')

  return (
    <div className='nav-offcanvas'>
        <div className='offcanvas-header'>
            <i className='bx bx-chevron-right fs-3 pb-2 ms-auto'></i>
        </div>
        <div className='offcanvas-body'>
            <div className='row text-center gx-1 mt-5'>
                <div className='col-md-12 p-2 rounded'>
                    <a className='nav-link' href='#'>{firstLink}</a>
                </div>
                <div className='col-md-12 p-2 mt-5 rounded'>
                    <a className='nav-link' href='#'>{secondLink}</a>
                </div>
                <div className='col-md-12 p-2 mt-5 rounded'>
                    <a className='nav-link' href='#'>{thirdLink}</a>
                </div>
                <div className='col-md-12 p-2 mt-5 rounded'>
                    <a className='nav-link' href='#'>{fourthLink}</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavbarOffCanvas