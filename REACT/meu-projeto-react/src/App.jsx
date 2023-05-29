import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MeuComponente from './components/MeuComponente'
import MeuContador from './MeuContador'
import MinhaLista from './components/MinhaLista'


const minhaLista = [
  {id:'1', value:'Fruta'},
  {id:'2', value:'Legume'},
  {id:'3', value:'Carne'},
  {id:'4', value:'Doce'}
]


export default function App() {

  const [produtos, setProdutos] = useState(minhaLista);
  const [pesquisa, setPesquisa] = useState('');

  useEffect(
    ()=> {
        if(pesquisa){
        const novaLista = minhaLista.filter((item)=>{
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        })
        setProdutos(novaLista)
      }else{
        setProdutos(minhaLista)
      }
    }
    //toda vez que ocorrer a arrow function, atualize isso
  , [pesquisa])

  return (
    <div>
      <h1>Efeitos colaterais</h1>
      <input type="text" 
      value={pesquisa}
      onChange={(e) => setPesquisa(e.target.value)}
      placeholder='pesquise aqui'></input>

      {minhaLista.map((item) => {
        return(
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })}
    </div>
  )
}


