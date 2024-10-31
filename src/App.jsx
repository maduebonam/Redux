import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css'

const App = () => {
  return (   
    <div className="flex items-center justify-center">
    <div className="min-h-min shadow-lg drop-shadow-lg rounded bg-slate-400 p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
   </div>
  );
};

export default App;