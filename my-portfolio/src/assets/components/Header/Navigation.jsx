import React, { useState } from 'react'
import './Navigation.css'
import NavbarOffCanvas from '../../offcanvas/NavbarOffCanvas/NavbarOffCanvas'

const Navigation = () => {

    const[brand, setbrand] = useState('RL')

  return (
    <div>
        <nav className='navbar navbar-expand-xxl fixed-top'>
            <div className='container-fluid'>
                <h6 className='p-1'>{brand}</h6>

                <i className='bx bx-menu fs-4 pb-2' data-bs-toggle='offcanvas' data-bs-target='#navRL' aria-controls='offcanvasExample'></i>

                <div class='offcanvas offcanvas-end' tabindex={-1} id='navRL' aria-labelledby='offcanvasExampleLabel'>
                    <NavbarOffCanvas />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation