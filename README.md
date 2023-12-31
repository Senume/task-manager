# TASK-MANAGER

Developed a React application enabling the users to add, remove, and update tasks with status toggling between done and undone. This document serves as a guide to elucidate the implementation and design process.

The website can be found at https://task-manager-nine-tan.vercel.app/

## BASIC STRUCTURE OF TASK MANAGER

<img width=500 src="https://github.com/Senume/task-manager-/assets/101030274/c0233162-f2a0-48ed-a581-9e5fa608566e"/>

From the above image, design of HTML file is modularied based on the function and looks. This makes the implementation simpler focusing on the each component individually.

### REACT COMPONENTS 

#### *AddaTask* COMPONENT
This component allows users to add new tasks. It includes a form with an input field for entering task text and a button to submit the form. It uses react-redux to dispatch the addTask action.

<img width=500 src="https://github.com/Senume/task-manager-/assets/101030274/bb9adf60-e831-4a9b-bc1d-f2f5ac715e8b"/>

#### *Reducers* COMPONENT
This file defines a Redux slice named 'tasksSlice'. It uses the createSlice function from @reduxjs/toolkit to create the slice. The slice includes the initial state for the tasks array and reducers for actions like adding a task, deleting a task, toggling the done status, and reordering tasks.

#### *Item* COMPONENT
It includes buttons for toggling the status and deleting a task. It provides the struture for representation of a task item.

<img width=500 src="https://github.com/Senume/task-manager-/assets/101030274/917a84df-5574-4a2a-89ee-a68aec0f935a"/>

#### *ViewListsDraggable* COMPONENTS
It provides a structure to represent all the task list. It uses the 'store' to hold data and update it when the user interacts with the item. To enable data, it calls the slicer to provide it with the functionality and its data. It also use 'useDrag' hook to set up drag-and-drop functionality.

<img width=500 src="https://github.com/Senume/task-manager-/assets/101030274/5accd0c4-9b03-4521-9baf-a04fe050b401"/>

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

<img width=500 src="https://github.com/Senume/task-manager-/assets/101030274/20a97bb7-4ee1-482a-be59-ea953ca93b86"/>
