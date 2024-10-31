import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks } from '../store';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleFilter = (isDone) => {
    dispatch(filterTasks(isDone));
  };

  return (
    <div className="p-4">
      <div className="font-semibold mb-2">
        <button onClick={() => handleFilter(true)} className="mr-5">
          Show Completed
        </button>
        <button onClick={() => handleFilter(false)}>Show Pending</button>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
