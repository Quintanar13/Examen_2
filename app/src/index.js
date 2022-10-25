import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Title from './components/Title';
import Boton from './styles/boton';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Jsx = () => {
  const [indiv, setindiv] = useState("");
  const [outdiv, setoutdiv] = useState("");
  const [divi1, setdivi1] = useState("");
  const [divi2, setdivi2] = useState("");

  const onChange = (e) => {
    console.log(e.target.name)
    if (e.target.name === 'indiv'){
      setindiv(e.target.value)
    }
    else if (e.target.name === 'entrada'){
      setdivi1(e.target.value)
    }
    else if (e.target.name === 'salida'){
      setdivi2(e.target.value)
    }
  }
  const onSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    switch(divi1){
      case '1':
        switch (divi2){
          case '1':
            alert("error misma divisa")
            setindiv("");
            setoutdiv("");
            break;
          case '2':
            setoutdiv(indiv*0.05);
            break;
          case '3':
            setoutdiv(indiv*0.051);
            break;
          case '4':
            setoutdiv(indiv*0.0000026);
            break;
          case '5':
            setoutdiv(indiv*0.000036);
            break;
          case '6':
            setoutdiv(indiv*0.82);
            break;
          }
      case '2':
        switch (divi2){
          case '1':
            setoutdiv(indiv*19.86);
            break;
          case '2':
            alert("error misma divisa")
            setindiv("");
            setoutdiv("");
            break;
          case '3':
            setoutdiv(indiv*1.00);
            break;
          case '4':
            setoutdiv(indiv*0.000051);
            break;
          case '5':
            setoutdiv(indiv*0.00071);
            break;
          case '6':
            setoutdiv(indiv*16.36);
            break;
          }
      case '3':
        switch (divi2){
          case '1':
            setoutdiv(indiv*19.79);
            break;
          case '2':
            setoutdiv(indiv*1.00);
            break;
          case '3':
            alert("error misma divisa")
            setindiv("");
            setoutdiv("");
            break;
          case '4':
            setoutdiv(indiv*0.000050);
            break;
          case '5':
            setoutdiv(indiv*0.00071);
            break;
          case '6':
            setoutdiv(indiv*16.35);
            break;
          }
      case '4':
        switch (divi2){
          case '1':
            setoutdiv(indiv*393530.41);
            break;
          case '2':
            setoutdiv(indiv*19766.9);
            break;
          case '3':
            setoutdiv(indiv*19842.71);
            break;
          case '4':
            alert("error misma divisa")
            setindiv("");
            setoutdiv("");
            break;
          case '5':
            setoutdiv(indiv*13.99);
            break;
          case '6':
            setoutdiv(indiv*322913.7);
            break;
          }
      case '5':
        switch (divi2){
          case '1':
            setoutdiv(indiv*28036.63);
            break;
          case '2':
            setoutdiv(indiv*1411.29);
            break;
          case '3':
            setoutdiv(indiv*1415.31);
            break;
          case '4':
            setoutdiv(indiv*0.071);
            break;
          case '5':
            alert("error misma divisa")
            setindiv("");
            setoutdiv("");
            break;
          case '6':
          setoutdiv(indiv*23038.58);
            break;
          }
      case '6':
        switch (divi2){
          case '1':
            setoutdiv(indiv*1.22);
            break;
          case '2':
            setoutdiv(indiv*0.061);
            break;
          case '3':
            setoutdiv(indiv*0.062);
            break;
          case '4':
            setoutdiv(indiv*0.0000031);
            break;
          case '5':
            setoutdiv(indiv*0.000043);
            break;
          case '6':
            alert("error misma divisa")
            setindiv("");
            setoutdiv("");
            break;
          }
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