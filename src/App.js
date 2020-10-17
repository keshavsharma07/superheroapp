import React, { useState } from 'react';
import './App.css';

function App() {
  const [name ,setName] =useState('Keshav');
  
  function changeName (){
    setName('Mark');
  }
  return (
    <div className="App">
      
        Helo {name}
        <br/>
        <button onClick={changeName}>Change</button>
          </div>
  );
}

export default App;
