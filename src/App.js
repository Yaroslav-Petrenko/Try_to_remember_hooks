import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [number, setNumber] = useState(10);

	const handler = (e) => setNumber(prev => prev + 1)

	useEffect(() => {
   	console.log('work')
	})

	return (
    <div className="container">
      <h1>Hello useEffect</h1>
      <h3>My number is {number}</h3>
      <a
        onClick={handler}
        className="waves-effect waves-light btn"
      >
        button
			</a>
			<br/>
			<br/>
      <a
        onClick={handler}
        className="waves-effect waves-light btn pink lighten-1"
      >
        get some features
      </a>
    </div>
  );
}

export default App;
