import React from 'react'
import './Profile.css'

const userAvatar = 'https://res.cloudinary.com/du68ssfzw/image/upload/v1735049873/My%20Portfolio/Image/ztbpdvtpd1h5zzltfdbe.jpg'

const Profile = () => {

    fetch(userAvatar).then(response => response.json()).then(data => console.log(data))

    const pName ='REY LERIOS'
    const pJob = 'Front-End Developer'

  return (
    <div className='profile'>
        <div className='row mt-5 pt-3'>
            <div className='col-sm-6 p-3 text-center justify-content-center'>
                <img className='rounded-circle p-1' width={120} src={userAvatar} alt='userAvatar.jpg' />
                <h1 className='pt-3 p-1'>{pName}</h1>
                <h6>{pJob}</h6>
            </div>
        </div>
    </div>
  )
}

export default Profile