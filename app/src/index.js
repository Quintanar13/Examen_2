import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Title from './components/Title';
import Boton from './styles/boton';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = (props) => {
  const [indiv, setindiv] = useState("");
  const [outdiv, setoutdiv] = useState("");
  const [divi1, setdivi1] = useState("");
  const [divi2, setdivi2] = useState("");

  const onChange = (e) => {
    console.log(e.target.name)
    if (e.target.name === 'indiv'){
      setindiv(e.target.value)
    }
    else if (e.select.name === 'entrada'){
      setdivi1(e.target.value)
    }
    else if (e.select.name === 'salida'){
      setdivi2(e.target.value)
    }
  }
  const onSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    if (divi1 === divi2){
        alert("error misma divisa")
        setindiv("");
    }
    else {
        
    }
  } 
  return (
    <>
      <Title/>
      <h2>
        <form>
        <div>
          <label htmlFor='indiv'>Divisa actual </label>
          <input 
            type="text" 
            name="indiv" 
            id="indiv"
            value={indiv}
            onChange={onChange}
            />
        </div>
          <select name="entrada" value={divi1} onChange={onChange}>
            <option value="1">MXN</option>
            <option value="2">USD</option>
            <option value="3">EUR</option>
            <option value="4">BTC</option>
            <option value="5">ETH</option>
            <option value="6">DOGE</option>
          </select>
        </form>
        <p/>
        <Boton onClick={onSubmit}>Convertir</Boton>
        <p/>
      </h2>
      <h2>
        <p>Conversion: {outdiv} </p>
        <form>
        <select name="salida" value={divi2} onChange={onChange}>
            <option value="1">MXN</option>
            <option value="2">USD</option>
            <option value="3">EUR</option>
            <option value="4">BTC</option>
            <option value="5">ETH</option>
            <option value="6">DOGE</option>
          </select>
        </form>
      </h2>
    </>
  );
};

root.render(<Jsx/>);