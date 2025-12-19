import { useState } from 'react';
import PropTypes from 'prop-types';


const NewTaskForm = ({onHandleSubmit}) => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newtask = {
      title,
      isComplete: false,
      description: ''
    };
    onHandleSubmit(newtask);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Enter New Task: </label>
      <input type="text" id="title" name="title" value={title} onChange={handleTitleChange}/>
      <div className="submit-button-wrapper">
        <input type="submit" value="Add a task"/>
      </div>
    </form>
  );
};

NewTaskForm.propTypes = {
  onHandleSubmit: PropTypes.func
};

export default NewTaskForm;