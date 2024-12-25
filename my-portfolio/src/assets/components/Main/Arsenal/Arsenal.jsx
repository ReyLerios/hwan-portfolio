import React from 'react'
import './Arsenal.css'

const reactEmblem = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
const angularEmblem = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg'
const swiftEmblem = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg'
const pythonEmblem = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'

const expressEmblem = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
const linuxEmblem = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg'
const bootstrapEmblem = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
const materialEmblem = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg'

const Arsenal = () => {

    fetch(reactEmblem).then(response => response.json()).then(data => console.log(data))
    fetch(angularEmblem).then(response => response.json()).then(data => console.log(data))
    fetch(swiftEmblem).then(response => response.json()).then(data => console.log(data))
    fetch(pythonEmblem).then(response => response.json()).then(data => console.log(data))

    fetch(expressEmblem).then(response => response.json()).then(data => console.log(data))
    fetch(linuxEmblem).then(response => response.json()).then(data => console.log(data))
    fetch(bootstrapEmblem).then(response => response.json()).then(data => console.log(data))
    fetch(materialEmblem).then(response => response.json()).then(data => console.log(data))

    const jsx = 'React'
    const ng = 'Angular'
    const swf = 'Swift'
    const py = 'Python'

    const exp = 'Express'
    const lnx = 'Linux'
    const bs = 'Bootstrap'
    const mu = 'Material UI'

  return (
    <div className='arsenal mb-5'>
        <div className='row p-2'>
            <div className='col-12 p-3 text-start'>
                <h6>Tech Stacks</h6>
            </div>
        </div>
        <div className='row gx-1 text-center justify-content-center'>
            <div className='col-lg-3 col-6 col-md-6 col-12 mt-3'>
                <img width={30} src={reactEmblem} alt='react.svg' />
                <p className='lang'>{jsx}</p>
            </div>
            <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-3'>
                <img width={30} src={angularEmblem} alt='react.svg' />
                <p className='lang'>{ng}</p>
            </div>
            <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-3'>
                <img width={30} src={swiftEmblem} alt='react.svg' />
                <p className='lang'>{swf}</p>
            </div>
            <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-3'>
                <img width={30} src={pythonEmblem} alt='react.svg' />
                <p className='lang'>{py}</p>
            </div>
        </div>
        <div className='row gx-1 mt-2 text-center justify-content-center'>
            <div className='col-lg-3 col-6 col-md-6 col-12 mt-3'>
                <img width={30} src={expressEmblem} alt='react.svg' />
                <p className='lang'>{exp}</p>
            </div>
            <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-3'>
                <img width={30} src={linuxEmblem} alt='react.svg' />
                <p className='lang'>{lnx}</p>
            </div>
            <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-3'>
                <img width={30} src={bootstrapEmblem} alt='react.svg' />
                <p className='lang'>{bs}</p>
            </div>
            <div className='col-lg-3 col-6 col-md-6 col-sm-3 mt-3'>
                <img width={30} src={materialEmblem} alt='react.svg' />
                <p className='lang'>{mu}</p>
            </div>
        </div>
    </div>
  )
}

export default Arsenal