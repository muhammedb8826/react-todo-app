import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemProp.title);
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleEditing = () => {
    setEditing(true);
  };
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(updateInput, itemProp.id);
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button
          type="button"
          onClick={handleEditing}
        >
          <AiFillEdit
            style={{ color: '#5e5e5e', fontSize: '16px' }}
          />
        </button>
        <button
          type="button"
          onClick={() => delTodo(itemProp.id)}
        >
          <FaTrashAlt style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <span style={itemProp.completed ? completedStyle : null}>
          {updateInput}
        </span>
      </div>
      <input
        style={editMode}
        type="text"
        value={updateInput}
        className={styles.textInput}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodoItem;
