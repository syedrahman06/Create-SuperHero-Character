import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superPower, setSuperPower] = useState("");
  const [change, setChange] = useState(false);


  return (
    <div className="App">

      <div className='banner'>
        <h1>Create Your Hero</h1>
      </div>

      <div className='main'>
        <div className='form'>
          <div className='row'>
            <div className='frame'>
              <label>Name: </label>
              <input className="input" type="text" placeholder="...Hulk, Thor, Cap..." onChange={(event) => { setName(event.target.value) }} />
            </div>

            <div className='frame'>
              <label>Age: </label>
              <input className="input" type="number" placeholder="...how old are they" onChange={(event) => { setAge(event.target.value) }} />
            </div>
          </div>

          <div className='row'>
            <div className='frame'>
              <label>Height: </label>
              <input className="input" type="number" placeholder="...how tall are they" onChange={(event) => { setHeight(event.target.value) }} />
            </div>

            <div className='frame'>
              <label>Super Power: </label>
              <input className="input" type="text" placeholder="...best in what" onChange={(event) => { setSuperPower(event.target.value) }} />
            </div>
          </div>
        </div>
        <button className="button" onClick={() => { setChange(true) }}>Display Character</button>

        <div>

          {change && (
            <div className='main-result'>
              <div className='result'>{name}</div>
              <div className='result'>{age}</div>
              <div className='result'>{height}</div>
              <div className='result'>{superPower}</div>
            </div>
          )}



        </div>


      </div>




    </div>
  );
}

export default App;
