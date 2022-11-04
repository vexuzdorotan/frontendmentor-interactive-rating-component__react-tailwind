import './App.css'

import DarkBackground from './components/DarkBackground'
import Card from './components/Card'
import Footer from './components/Footer'

import GlobalProvider from './shared/context/GlobalState'

const App = () => (
  <GlobalProvider>
    <DarkBackground>
      <Card />
    </DarkBackground>
    <Footer />
  </GlobalProvider>
)

export default App
