import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Message from './Message';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Message />} />
    </Routes>
  );
}

export default App;
