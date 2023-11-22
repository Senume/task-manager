import React from 'react';
import { useSelector } from 'react-redux';


import Item from '../Item/Item';

function ViewLists() {

    const tasks = useSelector((state) => state.TaskReducerState.tasks);
    console.log(tasks);
    return (
        <ul>
        {tasks.map((task) => (<Item key={task.id} Props={task} />))}
        </ul>
    );


}

export default ViewLists;