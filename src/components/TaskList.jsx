import PropTypes from 'prop-types';
import Task from './Task.jsx';
import './TaskList.css';

const TaskList = ({ tasks, toggleTaskCompletion, taskDeletion }) => {
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          isComplete={task.isComplete}
          toggleTaskCompletion={toggleTaskCompletion}
          taskDeletion={taskDeletion}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleTaskCompletion: PropTypes.func,
  taskDeletion: PropTypes.func,
};

export default TaskList;
