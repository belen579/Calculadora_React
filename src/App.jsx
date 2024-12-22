import { useState } from 'react';
import './App.css';

import ButtonCalculadora from './components/atoms/button';
import Display from './components/atoms/display';

function App() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState(null);
  const [operador, setOperador] = useState(null);
  const [operacion, setOperacion] = useState('');

  const calcular = () => {
    if (numero !== '' && operador !== null) {
      const num = parseFloat(numero);
      let res = resultado;

      if (resultado === null) {
        res = num;
      } else {
        switch (operador) {
          case '+':
            res += num;
            break;
          case '-':
            res -= num;
            break;
          case '*':
            res *= num;
            break;
          case '/':
            res /= num;
            break;
          default:
            return;
        }
      }

      setResultado(res);
      setNumero('');
      setOperacion('');
      setOperador(null);
    }
  };

  const clearAll = () => {
    setNumero('');
    setResultado(null);
    setOperador(null);
    setOperacion('');
  };

  const clearEntry = () => {
    setNumero('');
  };

  const squareRoot = () => {
    if (numero !== '') {
      if(numero<0){
        setNumero('ERROR')
      }else{
        const num = parseFloat(numero);
        const sqrtResult = Math.sqrt(num).toString();
        setNumero(sqrtResult);
        setOperacion(`${sqrtResult}`);

      }
    
    }
  };

  const updateNumero = (valor) => {
    setNumero((prevNumero) => {
      if (valor === '-' && prevNumero === '') {
        return valor; // Permite ingresar el signo negativo al principio
      
      } else if (valor === '-' && prevNumero !== ' ') {
        return prevNumero; // Si ya hay un número, no permite agregar el signo negativo en medio
      }
      return prevNumero + valor.toString();
    });
    setOperacion((prevOperacion) => prevOperacion + valor.toString());
  };

  const handleOperador = (op) => {
    if (numero !== '') {
      if (resultado === null) {
        setResultado(parseFloat(numero));
      } else {
        calcular();
      }
      setOperador(op);
      setNumero('');
      setOperacion((prevOperacion) => prevOperacion + ' ' + op + ' ');
    }
  };

  const borrarCaracter = ()=>{
    setNumero(prevNumero => prevNumero.slice(0,-1));
    setOperacion(prevOperacion => prevOperacion.slice(0,-1));

  }

  const displayValue = operacion || numero || (resultado !== null ? resultado.toString() : '');

  return (
    <div className="calculadora">
      <Display value={displayValue} />
      <ButtonCalculadora
        updateNumero={updateNumero}
        calcular={calcular}
        clearAll={clearAll}
        clearEntry={clearEntry}
        squareRoot={squareRoot}
        setOperador={handleOperador}
        numero= {numero}
        borrarCaracter = {borrarCaracter}
      />
    </div>
  );
}

export default App;

