import { gql, useMutation } from '@apollo/client'


export default function Task( {task, refetch} ) {
  const UPDATE_TASK = gql`
    mutation updateTask($task: String!, $completed: Boolean!) {
      updateTask(task: $task, completed: $completed) {
        task
        completed
      }
    }
  `

  const DELETE_TASK = gql`
    mutation deleteTask($task: String!) {
      deleteTask(task: $task) {
        task
        completed
      }
    }
  `

  const [updateTask, {updateData}] = useMutation(UPDATE_TASK);
  const [deleteTask, {deleteData}] = useMutation(DELETE_TASK);

  const handleUpdate = () => {
    updateTask({variables: {task: task.task, completed: task.completed}})
  }

  const handleDelete = () => {
    console.log('show me the task', task.task)
    deleteTask({variables: {task: task.task}})
    refetch()
  }

  return (
    <div>
      <input
      onClick={handleUpdate}
      type='checkbox'
      defaultChecked={task.completed}/>

      {task.task}

      <button
      onClick = {handleDelete}>
        Delete
      </button>
    </div>
  )
}