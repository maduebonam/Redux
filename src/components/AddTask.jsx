import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';
import { v4 as uuidv4 } from 'uuid';


const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ id: uuidv4(), description, isDone: false }));
    setDescription('');
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="New task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
