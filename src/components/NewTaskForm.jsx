import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const kDefaultsFormState = {
  title: '',
  description: '',
  isComplete: false
};


const NewTaskForm = ({onHandleSubmit}) => {
  const [formData, setFormData] = useState(kDefaultsFormState);

  //  const [title, setTitle] = useStateuseState()

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setFormData((formData)=> {
      return {
        ...formData,
        [inputName]: inputValue
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onHandleSubmit(formData);
    setFormData(kDefaultsFormState)
  }

  const makeControlledInput = (inputName) => {
    return (
      <input
        type="text"
        name={inputName}
        id={`input-${inputName}`}
        value={formData[inputName]}
        onChange={handleChange}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div>
        <label htmlFor="title">Enter New Task: </label>
        { makeControlledInput('title') }
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        { makeControlledInput('description') }
      </div>
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