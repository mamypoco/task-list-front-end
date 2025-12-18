import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

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

const flaskBaseURL = 'http://127.0.0.1:5000';

const getAllTasksAPI = () => {
  return axios.get(`${flaskBaseURL}/tasks`)
    .then(response => response.data)
    .catch(error => console.log(error));
};

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
    setTasksData((tasks) => tasks.filter((task) => task.id !== taskId));
  };
  console.log('tasksData in App:', tasksData);

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
