import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasksData, setTasksData] = useState(TASKS);

  const toggleTaskCompletion = (taskId) => {
    setTasksData(tasks => {
      return tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, isComplete: !task.isComplete };
        } else {
          return task;
        }
      });
    });
  };

  const taskDeletion = (taskId) => {
    setTasksData(tasksData => {
      return tasksData.filter(task => {
        task.id !== taskId;
      });
    });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={tasksData} toggleTaskCompletion={toggleTaskCompletion} taskDeletion={taskDeletion} />
        </div>
      </main>
    </div>
  );
};


export default App;
