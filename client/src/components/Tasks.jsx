import Task from './Task'
import axios from 'axios';

export default function Tasks ( {data, refetch} ) {

  return (
    <div>
      {data?.map((each, i) => (
        <Task key={i} task={each} refetch={refetch}/>
      ))}
    </div>
  )
}