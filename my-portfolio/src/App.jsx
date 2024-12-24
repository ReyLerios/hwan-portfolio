import './App.css'
import Navigation from './assets/components/Header/Navigation'
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
      </main>

      <footer></footer>

    </>
  )
}

export default App
