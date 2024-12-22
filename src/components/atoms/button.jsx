
import PropTypes from 'prop-types';

const ButtonCalculadora = ({ updateNumero, calcular,clearAll, squareRoot, setOperador , numero, borrarCaracter}) => {
  return (
    <div className="calculadora">
      <div className="cr">
        <button onClick={clearAll}>CR</button>
        <button onClick={borrarCaracter} >←</button>
      
        <button onClick={squareRoot} className="operacion">√</button>
      </div>
      <div className="wrapper">
        <button onClick={() => updateNumero(9)}>9</button>
        <button onClick={() => updateNumero(8)}>8</button>
        <button onClick={() => updateNumero(7)}>7</button>
        <button onClick={() => setOperador('*')} className="operacion">*</button>
        <button onClick={() => updateNumero(4)}>4</button>
        <button onClick={() => updateNumero(5)}>5</button>
        <button onClick={() => updateNumero(6)}>6</button>

       
        <button onClick={() => {
              if (numero !== '') {
                setOperador('-');
              }else{
                updateNumero('-')
              }
        }} className="operacion">-</button>
        <button onClick={() => updateNumero(1)}>1</button>
        <button onClick={() => updateNumero(2)}>2</button>
        <button onClick={() => updateNumero(3)}>3</button>
        <button onClick={() => setOperador('+')} className="operacion">+</button>
        <button onClick={() => updateNumero(0)}>0</button>
        <button onClick={() => updateNumero('.')}>.</button>
        <button onClick={calcular} className="operacion">=</button>
        <button onClick={() => setOperador('/')} className="operacion">/</button>
      </div>
    </div>
  );


};



export default ButtonCalculadora;
