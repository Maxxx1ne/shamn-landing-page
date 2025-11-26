import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Info } from './components/Info'
import { Engine } from './components/Engine'
import { Telemetry } from './components/Telemetry'
import { Catalog } from './components/Сatalog'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Info />
      <Engine />
      <Telemetry />
      <Catalog />
    </div>
  )
}

export default App
