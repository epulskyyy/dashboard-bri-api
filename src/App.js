import React from 'react';
import SideBar from './components/SideBar/SideBar';
import Toolbar from './components/Toolbar/Toolbar';
import './App.css';
import Content from './Layout/Container/Content';
function App() {
  return (
    <div className="app">
      <Toolbar />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
