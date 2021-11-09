import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from  './Item';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`localhost:3030/getprices`)
      .then(res => {
        setData(res);
      });
  });


  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
