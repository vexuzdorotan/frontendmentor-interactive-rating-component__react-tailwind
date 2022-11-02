import './App.css'

import Card from './components/Card'
import Footer from './components/Footer'

import { GlobalProvider } from './shared/context/GlobalState'

const App = () => (
  <GlobalProvider>
    <div className='flex justify-center items-center h-screen bg-neutralVeryDarkBlue'>
      <Card />
    </div>

    <Footer />
  </GlobalProvider>
)

export default App
