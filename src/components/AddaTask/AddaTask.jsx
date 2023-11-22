// AddaTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Reducers/RecordSlice';
import './AddaTask.css'

const AddaTask = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
    setError(''); // Clear any previous errors when the input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation: Check if the task text is not empty
    if (taskText.trim() === '') {
      setError('Task text cannot be empty.');
      return;
    }

    // Dispatch the action to add the task
    dispatch(addTask(taskText));

    // Clear the input field after adding the task
    setTaskText('');
  };

  return (
    <div className='submitcontainer'>
      <form onSubmit={handleSubmit}>
        <label >
          <input
            type="text"
            value={taskText}
            onChange={handleInputChange}
            placeholder="Enter task..."
            className='textbox'
          />
        </label>
        <button type="submit" className='submitbutton'>Add Task</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddaTask;
