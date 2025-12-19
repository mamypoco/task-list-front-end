import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, description, isComplete, toggleTaskCompletion, taskDeletion }) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  const onTaskCompletion = () => {
    toggleTaskCompletion(id, isComplete);
    console.log(title, isComplete);
  };

  const onTaskDeletion = () => {
    taskDeletion(id);
  };


  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={onTaskCompletion}
      >
        <div className="task-title">
          {title}
        </div>
        <div className="task-description">
          {description}
        </div>
      </button>
      <button onClick={onTaskDeletion} className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  description: PropTypes.string,
  toggleTaskCompletion: PropTypes.func,
  taskDeletion: PropTypes.func
};

export default Task;
