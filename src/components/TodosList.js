import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todosProps, handleChange, delTodo, setUpdate,
}) {
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todosProps: PropTypes.instanceOf(Array),
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
TodosList.defaultProps = {
  todosProps: [],
};
export default TodosList;
