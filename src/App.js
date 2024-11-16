import React from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
