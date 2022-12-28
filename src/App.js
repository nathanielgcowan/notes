import React, { useState } from 'react'

// state is a React object with data of the component that changes over time and rerenders

function App(props) {
  const [state, setState] = useState('apple')
  return (
    <div className="App">
      {
        console.log(state)
      }
      <ExampleOfProps />
    </div>
  );
}

export default App;

// Props are arguments pased into React Components
const ExampleOfProps = () => {
  console.log('example of props')
}
