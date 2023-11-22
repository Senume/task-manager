# TASK-MANAGER

Developed a React application enabling the users to add, remove, and update tasks with status toggling between done and undone. This document serves as a guide to elucidate the implementation and design process.

The website can be found at https://task-manager-git-main-thushit-kumar-rs-projects.vercel.app/

## BASIC STRUCTURE OF TASK MANAGER

![Alt1](https://github.com/Senume/task-manager-/blob/main/DATA/HTMLStruture.png)

From the above image, design of HTML file is modularied based on the function and looks. This makes the implementation simpler focusing on the each component individually.

### REACT COMPONENTS 

#### *AddaTask* COMPONENT
This component allows users to add new tasks. It includes a form with an input field for entering task text and a button to submit the form. It uses react-redux to dispatch the addTask action.

![Alt2](https://github.com/Senume/task-manager-/blob/main/Data/AddaTask.png)

#### *Reducers* COMPONENT
This file defines a Redux slice named 'tasksSlice'. It uses the createSlice function from @reduxjs/toolkit to create the slice. The slice includes the initial state for the tasks array and reducers for actions like adding a task, deleting a task, toggling the done status, and reordering tasks.

#### *Item* COMPONENT
It includes buttons for toggling the status and deleting a task. It provides the struture for representation of a task item.

![Alt3](https://github.com/Senume/task-manager-/blob/main/Data/Item.png)

#### *ViewListsDraggable* COMPONENTS
It provides a structure to represent all the task list. It uses the 'store' to hold data and update it when the user interacts with the item. To enable data, it calls the slicer to provide it with the functionality and its data. It also use 'useDrag' hook to set up drag-and-drop functionality.

![Alt4](https://github.com/Senume/task-manager-/blob/main/Data/Lists.png)

#### *TaskManager* COMPONENTS
It merges the 'AddaLists' and 'ViewListsDraggable' components into single page.

#### **ProfilePage** COMPONENTS
A simple component displaying a personal resume or profile information. Note, the details shown are just implementation purposes. 

## LIBRARIES USE

**React and ReactDOM** - Core libraries for building React applications.

**React Router** - Library used to build multi-page website on React. It provides a interface to navigation between the React components. 'Task Manager page' and 'Profile page' are navigated via 'Router'

**Redux and React-Redux:** - Library for state management in React applications.

**@reduxjs/toolkit:** - A set of tools and abstractions for working with Redux, including the createSlice function.

## ADDITIONAL FUNCTIONALITIES

To implement drag-and-drop functionality for reordering tasks using only the useDrag hook, you can leverage the onMouseDown, onMouseUp, and onMouseMove events to manually handle the drag-and-drop process.

![Alt5](https://github.com/Senume/task-manager-/blob/main/Data/DD.png)
