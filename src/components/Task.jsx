import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, toggleTaskCompletion, taskDeletion }) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  const onTaskCompletion = () => {
    toggleTaskCompletion(id, isComplete);
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
      </button>
      <button onClick={onTaskDeletion} className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  toggleTaskCompletion: PropTypes.func,
  taskDeletion: PropTypes.func
};

export default Task;
