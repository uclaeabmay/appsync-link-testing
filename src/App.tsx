import { useState } from 'react'

import './App.css'

function App() {
  
  const [data, setData] = useState({});

const pullData = () => {
    setData({'yes': 'yes'})
}

  return (
    <>
      
      <h1>Blank front end to test AppSync</h1>
      <div className="card">
        <button onClick={pullData}>
          pull data
        </button>
        <p>
          {JSON.stringify(data)}
        </p>
      </div>
    </>
  )
}

export default App
