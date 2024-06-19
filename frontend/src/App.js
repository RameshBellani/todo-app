import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          width="180"
          height="131"
          src="https://shanture.com/wp-content/uploads/2024/06/cropped-2-180x131.png"
          className="App-logo"
          alt="Shanture"
          decoding="async"
          srcSet="https://shanture.com/wp-content/uploads/2024/06/cropped-2-180x131.png 180w, https://shanture.com/wp-content/uploads/2024/06/cropped-2-300x218.png 300w, https://shanture.com/wp-content/uploads/2024/06/cropped-2.png 336w"
          sizes="(max-width: 180px) 100vw, 180px"
        />
        <h1>To-Do List</h1>
      </header>
      <main>
        <AddTask />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
