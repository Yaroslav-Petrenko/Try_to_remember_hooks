import React from 'react';
import { useState, useEffect } from 'react';
import Spinner from './spinner';
import Title from './title'
import './App.css';

function App() {
  const [number, setNumber] = useState(10);
  const [dataFromServer, setDataFromServer] = useState('no data');
  const [loading, setLoading] = useState(true);

  const handler = (e) => setNumber((prev) => prev + 1);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('/features', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    // console.log("result is ", result)
    // console.log('typeof result is ', typeof result);
    setDataFromServer(result);
    setLoading(false);
  };

    const spinner = loading ? <Spinner/> : null
		return (
     <div className="container">
     	 <Title
	        handler={handler}
	        dataFromServer={dataFromServer}
	        number={number}
				/>
				{spinner}
     </div>
    );
}

export default App;
