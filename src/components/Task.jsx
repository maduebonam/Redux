import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskStatus, editTask } from '../store';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTaskStatus(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task description', task.description);
    if (newDescription) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <span className={`${task.isDone ? 'line-through' : ''}`}>
        {task.description}
      </span>
      <div>
        <button onClick={handleToggle} className="mr-2 rounded bg-blue-500 p-2">
          {task.isDone ? 'Undo' : 'Complete'}
        </button>
        <button onClick={handleEdit} className='bg-blue-500 rounded p-2'>Edit</button>
      </div>
    </div>
  );
};

export default Task;
