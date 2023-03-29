import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = () => (
  <div className="input-container">
    <div>
      <input type="text" placeholder="Add todo..." />
      <span><FaPlusCircle style={{ color: 'darkgray', fontSize: '1.3em', backgroundColor: 'white' }} /></span>
    </div>
  </div>
);
export default InputTodo;
