import React from 'react';
import AddaTask from '../AddaTask/AddaTask';
import './TaskManager.css'

import ViewListsDrag from '../ViewListsDraggable/ViewListsDrag';

function TaskManager() {
    return (
        <div className="Manager">
            <h1>To-Do Manager</h1>
            <ViewListsDrag/>
            <AddaTask></AddaTask>
        </div>
    );
}

export default TaskManager;