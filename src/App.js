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
  }, []);


  return (
    <div className="App">
      {data.map((item, index) => {
        return <Item key={index} item={item}/>
      })}
    </div>
  );
}

export default App;
