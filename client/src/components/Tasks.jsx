import { useQuery } from '@tanstack/react-query';
import Task from './Task'
import axios from 'axios';

export default function Tasks () {
  const query = `
    query {
      getTasks {
        task
        completed
      }
    }
  `
  const { data } = useQuery(["taskData"], async () => {
    const results = await axios.post('http://localhost:3000/graphql', { query })
    return results.data.data.getTasks
  })

  return (
    <div>
      {data?.map((each, i) => (
        <Task key={i} task={each}/>
      ))}
    </div>
  )
}