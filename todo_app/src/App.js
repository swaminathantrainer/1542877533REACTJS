import React from 'react';
import TodoListingPage from './pages/TodoListingPage';

const App = () => {
  return (
    <div style={{
      position: 'fixed',
      left: 0,
      right: 0,
      width: '100%',
      height: '100%'
    }}>
      <TodoListingPage />
    </div>
  )
};

export default App;
