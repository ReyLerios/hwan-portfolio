import './App.css'
import Navigation from './assets/components/Header/Navigation'
import Arsenal from './assets/components/Main/Arsenal/Arsenal'
import Profile from './assets/components/Main/Profile/Profile'
import Works from './assets/components/Main/Works/Works'

function App() {

  return (
    <>

      <header>
        <Navigation />
      </header>

      <main>
        <div className='container'>
          <Profile />
        </div>
        <div className='container'>
          <Arsenal />
        </div>
        <div className='container'>
          <Works />
        </div>
      </main>

      <footer></footer>

    </>
  )
}

export default App
