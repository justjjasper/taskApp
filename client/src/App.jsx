import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Tasks from './components/Tasks';
import Form from './components/Form';
import axios from 'axios';
import './App.css'

function App() {
  const query = `
  query {
    getTasks {
      task
      completed
    }
  }
  `
  const { data, refetch } = useQuery(["taskData"], async () => {
    const results = await axios.post('http://localhost:3000/graphql', { query })
    return results.data.data.getTasks
  })


  return (
    <div className="App">
      <h3> Task App </h3>
      <Form refetch={refetch}/>
      <Tasks data={data} refetch={refetch}/>
    </div>
  )
}

export default App
