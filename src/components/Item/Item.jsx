import React from 'react';
import { useDispatch} from 'react-redux';
import { deleteTask, toggleDone } from '../Reducers/RecordSlice';

import './Item.css';
import { FaRegSquare, FaRegCheckSquare, FaRegTrashAlt  } from "react-icons/fa";





function Item(V) {

    const dispatch = useDispatch();

    return (

          <li className='Itemli'>
            <div className='TaskItem'>{V.Props.text}</div>
            <div className='ButtonHolderItem'>
              <button className="ButtonItem" onClick={() => dispatch(toggleDone(V.Props.id))}>
                {V.Props.done  ? <FaRegCheckSquare /> : <FaRegSquare />}
              </button>
              <button className="ButtonItem" onClick={() => dispatch(deleteTask(V.Props.id))}><FaRegTrashAlt /></button>
            </div>
          </li>
    );


}

export default Item;