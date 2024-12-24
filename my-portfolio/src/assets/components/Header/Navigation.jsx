import React, { useState } from 'react'
import './Navigation.css'

import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { fill } from '@cloudinary/url-gen/actions/resize'
import NavbarOffCanvas from '../../offcanvas/NavbarOffCanvas/NavbarOffCanvas'

const Navigation = () => {

    const cld = new Cloudinary ({
        cloud: {
            cloudName: 'du68ssfzw'
        }
    })

    const userAvatar = cld.image('My Portfolio/Image/ztbpdvtpd1h5zzltfdbe')
    userAvatar.resize(fill().width(500).height(500))

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