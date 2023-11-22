// ViewLists.js
import React, {useRef}from 'react';
import { useSelector, useDispatch } from 'react-redux';

//import DragTask from '../DragTask/DragTask';
import Item from '../Item/Item';

import { reorderTasks } from '../Reducers/RecordSlice';

import './ViewListsDrag.css'

const ViewListsDrag = () => {
  const tasks = useSelector((state) => state.TaskReducerState.tasks);
  const dispatch = useDispatch();

const dragTask  = useRef(null);
const dragOverTask = useRef(null);

const handleend = () => {
  dispatch(reorderTasks({dragTask, dragOverTask})); 
}

  return (
    <div className='Taskbox'>
      {tasks.map((task, index) => (
        <div key={task.id} className='DraggingObject' 
        draggable
        onDragStart={() => (dragTask.current = index)}
        onDragEnter={() => (dragOverTask.current = index)}
        onDragEnd={handleend}
        >
          <Item key={task.id} Props={task} />
        </div>
        
      ))}
    </div>
  );
};

export default ViewListsDrag;
