import { FaEdit, FaTrash } from 'react-icons/fa';

const TodoItem = () => (
  <div className="todo-item">
    <input type="checkbox" />
    <input type="text" value="first item" />
    <span><FaEdit /></span>
    <span><FaTrash /></span>
  </div>
);

export default TodoItem;
