import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

 export const ToDo = ({task,deleteTodo, editTodo,toggleComplete}) => {
  return (
    <div className='Todo'>
      <p className={`${task.completed ? "completed": "incompleted"}`} onClick={()=>toggleComplete(task.id)}>{task.task}</p>
      <div>
          <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(task.id)}/>
          <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}/>
         

      </div>
    </div>
  )
}


