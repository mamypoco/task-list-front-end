import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

//// connecting database via flask ////
const flaskBaseURL = 'http://127.0.0.1:5000';

const getAllTasksAPI = () => {
  return axios.get(`${flaskBaseURL}/tasks`)
    .then(response => response.data)
    .catch(error => console.log(error));
};

const convertFromAPI = (apiTask) => {
  const newTask = {
    ...apiTask,
    isComplete: apiTask.is_complete,
  };
  delete newTask.is_complete;
  delete newTask.description;
  delete newTask.goal_id;

  return newTask;
};

const removeTaskAPI = id => {
  return axios.delete(`${flaskBaseURL}/tasks/${id}`)
    .catch(error => console.log(error));
};

const markCompleteBehaviorAPI = (id, isComplete) => {
  const endpoint = isComplete ? 'mark_incomplete' : 'mark_complete';
  return axios.patch(`${flaskBaseURL}/tasks/${id}/${endpoint}`)
    .catch(error => console.log(error));
};

const App = () => {
  const [tasksData, setTasksData] = useState([]);

  const getAllTasks = () => {
    return getAllTasksAPI()
      .then(tasks => {
        const newTasks = tasks.map(convertFromAPI);
        setTasksData(newTasks);
        console.log('newTasks', newTasks);
      });
  };

  useEffect(() => {
    getAllTasks();
    console.log(tasksData);
  }, []);


  const toggleTaskCompletion = (taskId, isComplete) => {
    return markCompleteBehaviorAPI(taskId, isComplete)
      .then(()=> {
        return setTasksData(tasks => {
          return tasks.map(task => {
            if (task.id === taskId) {
              return { ...task, isComplete: !task.isComplete };
            } else {
              return task;
            }
          });
        });
      });
  };

  const taskDeletion = (taskId) => {
    return removeTaskAPI(taskId)
      .then(()=> {
        return setTasksData((tasks) => tasks.filter((task) => task.id !== taskId));
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
