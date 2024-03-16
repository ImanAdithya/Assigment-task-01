import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [g, setG] = useState(0);
  const [f, setF] = useState(0);
  const [c, setC] = useState(0);

  const [answer, setAnswer] = useState(0);

  return (

      <div className="App">

        <div className='main-div'>
          <h1>x<sup>2</sup> + y<sup>2</sup> + 2</h1>
          <input onChange={(e) => {setG(parseInt(e.target.value))}}
          />
          <h1>x + 2 </h1>
          <input onChange={(e) => {setF(parseInt(e.target.value))}}
          />
          <h1>y + </h1>
          <input onChange={(e) => {setC(parseInt(e.target.value))}}
          />
          <h1>= 0</h1>
        </div>

        <button onClick={
          () => {
            let value = Math.sqrt((g*g + f*f - c));
            setAnswer(value);
          }
        }>Calculate</button>

        <div className='main-div'>
          <h1>Radius = </h1>
          <h1>{answer}</h1>
        </div>


      </div>

  );
}

export default App;
