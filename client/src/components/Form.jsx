import { useRef } from 'react'
import { useQuery } from '@tanstack/react-query';
import { gql, useMutation } from '@apollo/client'
import axios from 'axios';

export default function Form( {refetch} ) {
  const inputRef = useRef()

  // const query = `
  //   mutation addTask($task: String!) {
  //     addTask(task: $task) {
  //       task
  //       completed
  //     }
  //   }
  // `
  // const handleClick = async () => {
  //   const results = await axios.post('http://localhost:3000/graphql', {query, variables: {task: inputRef.current.value}} )
  //   refetch()
  //   inputRef.current.value = ''
  // }

  const ADD_TASK = gql`
    mutation addTask($task: String!) {
      addTask(task: $task) {
        task
        completed
      }
    }
  `

  const [addTask, { data }] = useMutation(ADD_TASK)

  const handleClick = async () => {
    addTask({variables: {task:inputRef.current.value}})
    inputRef.current.value = ''
    refetch()
    console.log('what is data"', data)
  }

  return (
    <div>
      <input
      ref = {inputRef}
      type = 'text'
      />

      <button
      onClick={handleClick}>
        Add a task
      </button>
    </div>
  )
}