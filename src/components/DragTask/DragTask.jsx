// DraggableTask.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch} from 'react-redux';
import { deleteTask, toggleDone } from '../Reducers/RecordSlice';

import './Item.css';
import { FaRegSquare, FaRegCheckSquare, FaRegTrashAlt  } from "react-icons/fa";

const DragTask = ({ task, index, onDrop }) => {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, index },
  });

  const dispatch = useDispatch();

  return (
    <div ref={drag} onClick={() => onDrop(index)}>
      <li className='Itemli'>
            <div className='TaskItem'>{task.text}</div>
            <div className='ButtonHolderItem'>
              <button className="ButtonItem" onClick={() => dispatch(toggleDone(task.id))}>
                {task.done  ? <FaRegCheckSquare /> : <FaRegSquare />}
              </button>
              <button className="ButtonItem" onClick={() => dispatch(deleteTask(task.id))}><FaRegTrashAlt /></button>
            </div>
          </li>
    </div>
  );
};

export default DragTask;
