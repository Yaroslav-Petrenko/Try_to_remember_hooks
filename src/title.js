import React from 'react';

const Title = ({handler, number, dataFromServer }) => {
  return (
     <>
     	 <h1>Hello useEffect</h1>
	      <h3>My number is {number}</h3>
	      <a onClick={handler} className="waves-effect waves-light btn">
	        button
	      </a>
	      <br />
	      <br />
	      <a
	        // onClick={getData}
	        className="waves-effect waves-light btn pink lighten-1"
	      >
	        get some features
	      </a>
	      <h1>{dataFromServer.name}</h1>
	      <h1>{dataFromServer.emeil}</h1>
     </>
  );
};

export default Title