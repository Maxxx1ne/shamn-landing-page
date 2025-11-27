import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Info } from './components/Info'
import { Engine } from './components/Engine'
import { Telemetry } from './components/Telemetry'
import { Catalog } from './components/Сatalog'
import { Galary } from './components/Galary'
import { Video } from './components/Video'
import { Footer } from './components/Footer'
import { Form } from './components/Form'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Info />
      <Engine />
      <Telemetry />
      <Catalog />
      <Galary />
      <Video />
      <Form />
      <Footer />
    </div>
  )
}

export default App
