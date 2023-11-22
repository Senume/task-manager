import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import TaskManager from './components/TaskManager/TaskManager';
import ProfilePage from './components/ProfilePage/ProfilePage';

import './App.css';

const App = () => {

  return (
    <DndProvider backend={HTML5Backend}>
    <Router>
    <div className="App">
        <header>
          <nav>
            <h1 className='PageTitle'>TaskMaestro</h1>
            <div className='menu'>
              <NavLink className='PageLink' to="/"><span className='Link'>Task Manager</span></NavLink>
              <NavLink className='PageLink' to="/profile"><span className='Link'>Profile</span></NavLink>
            </div>
          </nav>
        </header>
        <main>
        <Routes>
          <Route path="/" element={<TaskManager/>} />
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
        
        </main>
        
    </div>
    </Router>
    </DndProvider>
  );
};

export default App;
