import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Tasks from './components/Tasks';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client} >
      <div className="App">
        <h3> Task App </h3>
        <Tasks/>
      </div>
    </QueryClientProvider>
  )
}

export default App
