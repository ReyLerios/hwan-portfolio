import './App.css'
import Navigation from './assets/components/Header/Navigation'
import Arsenal from './assets/components/Main/Arsenal/Arsenal'
import Profile from './assets/components/Main/Profile/Profile'

function App() {

  return (
    <>

      <header>
        <Navigation />
      </header>

      <main>
        <div className='container-fluid'>
          <Profile />
        </div>
        <div className='container-fluid'>
          <Arsenal />
        </div>
      </main>

      <footer></footer>

    </>
  )
}

export default App
