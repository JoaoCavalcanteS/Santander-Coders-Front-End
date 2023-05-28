import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MeuComponente from './components/MeuComponente'

function App() {

  return (
    <div>
      <h1>Olá mundo, React!</h1>
      <MeuComponente/>

      <MeuBotao conteudo='me clique'/>
      <MeuBotao conteudo='depois aqui'/>
      <MeuBotao conteudo='e por fim aqui'/>

    </div>
    
  )
}

function MeuBotao(props){
  console.log(props);
  return(
    <button>{props.conteudo}</button>
  )
}


export default App
