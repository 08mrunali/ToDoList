import React,{useState} from 'react';
import {ToDo} from './ToDo';
import {ToDoForm} from './ToDoForm';
import {v4 as uuidv4} from 'uuid';
import { EditToDoForm } from './EditToDoForm';






export const TodoWrapper = () => {
    const[list,setTodos]=useState([ ]);

    const addTodo = (todo) =>{

        setTodos([ ...list,{id: uuidv4(),task: todo, completed: false, isEditing: false},]);

    }
    const toggleComplete = (id) =>{
        setTodos(list.map((todo) =>todo.id === id? {...todo,completed: !todo.completed} : todo));
    }
    const deleteTodo = (id)=>{
        setTodos(list.filter((todo) => todo.id !== id));
    }
    const editTodo = (id) =>{
        setTodos(list.map((todo) => todo.id === id ? {...todo,isEditing: !todo.isEditing} : todo));
    }
    const editTask = (task,id)=>{
        setTodos(list.map((todo) => todo.id === id ? {...todo,task,isEditing: !todo.isEditing}: todo ));
    } 
    
    return (
    <div className='TodoWrapper'>
        <h1>To-Do List</h1>
      <ToDoForm addTodo={addTodo} /> 
      {list && list.map((todo)=>(
        todo.isEditing ? (
            <EditToDoForm editTodo={editTask} task={todo}/>
        ) : (

        
            <ToDo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
           )
      ))}
     
    </div>
  )
}

