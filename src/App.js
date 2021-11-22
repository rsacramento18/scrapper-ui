import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from  './Item';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3030/getprices`)
      .then(res => {
        console.log(res);
        setData(res.data);
      });
  });


  return (
    <div className="App">
      <div className="title">
        <h1>Fraldinhas</h1>
      </div>
      <div className="all-items">
      {data.map((item, index) => {
        return <Item key={index} item={item}/>
      })}
      </div>
    </div>
  );
}

export default App;
