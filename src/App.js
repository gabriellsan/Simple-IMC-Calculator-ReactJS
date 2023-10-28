import React,{useState}from 'react'
import './App.css';
import Altura from './components/Altura';
import Form from './components/Form';
import Peso from './components/Peso';
import Resultado from './components/Resultado';
import Calcular from './components/Calcular';

function App() {
  const [peso,setPeso] = useState(0)
  const [altura,setAltura] = useState(0)
  const [resultado,setResultado] = useState(0)

  return (
    <div>
      <h1>Calculadora IMC</h1>
      <Peso name={peso} setPeso={setPeso}/>
      <Altura  name={altura} setAltura={setAltura}/>
      <Calcular p={peso} a={altura} sr={setResultado}/>
      <Resultado name={resultado}/>
      <Form/>
    </div>
  );
}

export default App;
