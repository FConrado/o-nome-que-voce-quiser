import { Header } from './Components/Header'
import { Inicio } from './Components/Inicio'
import { Servicos } from './Components/Servicos'
import { Precos } from './Components/Precos'
import { Sobre } from './Components/Sobre'
import { Contato } from './Components/Contato'
import "./global.css"

import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header/>
      <Inicio/>
      <Sobre/>
      <Servicos/>
      <Precos/>
      <Contato/>
    </div>
  )
}

export default App
