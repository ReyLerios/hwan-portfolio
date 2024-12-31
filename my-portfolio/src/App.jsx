import { useState } from 'react'
import './App.css'

const Profile = 'https://res.cloudinary.com/du68ssfzw/image/upload/v1735049873/My%20Portfolio/Image/ztbpdvtpd1h5zzltfdbe.jpg'

function App() {

  fetch(Profile).then(response => response.json()).then(data => console.log(data))

  const name = 'Rey Lerios'
  const job = 'Front-End Developer'

  return (
    <div>

      <div className='container profile mt-3'>
        <div className='row gx-1 mt-5'>

          <div className='col-sm-6 text-center justify-content-center'>
            <img className='rounded-circle' src={Profile} width={140} alt='Profile.jpeg' />
            <h1 className='text-dark pt-3'>{name}</h1>
            <h6 className='text-body-secondary'>{job}</h6>
          </div>

          <div className='col-sm-6 text-start mt-4 p-2'>
            <p className='text-dark'>
               Twenty-three year old freelance front-end developer and computer science student and computer science student
               based in the Philippines. Together with my swift, effective and problem-solving skills, my stacks are current.
               I have 2 years of experience in UI/UX Designing.
            </p>
            <p className='text-dark'>
              I would be grateful for this collaboration with you on this project and convey how my skills will be useful.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App
