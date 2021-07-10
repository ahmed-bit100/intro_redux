import React from 'react';
import {useDispatch} from 'react-redux';
import {completeTask, deleteTask} from '../redux/actions';

const TaskCard = ({task}) => {
  //   console.log(task);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 id={task.isDone ? 'done' : ''}> {task.action} </h1>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      <button onClick={() => dispatch(completeTask(task.id))}>Complete</button>
      <button>Edit</button>
    </div>
  );
};

export default TaskCard;
