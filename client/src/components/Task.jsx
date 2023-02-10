import { gql, useMutation } from '@apollo/client'


export default function Task( {task} ) {
  const UPDATE_TASK = gql`
    mutation updateTask($task: String!, $completed: Boolean!) {
      updateTask(task: $task, completed: $completed) {
        task
        completed
      }
    }
  `
  const [updateTask, {data}] = useMutation(UPDATE_TASK);

  const handleUpdate = () => {
    updateTask({variables: {task: task.task, completed: task.completed}})
  }

  return (
    <div>
      <input
      onClick={handleUpdate}
      type='checkbox'
      defaultChecked={task.completed}/>
      {task.task}
    </div>
  )
}