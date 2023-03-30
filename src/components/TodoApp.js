import { Routes, Route } from 'react-router-dom';

import Home from '../routes/Home';
import About from '../routes/About';
import NotMatch from '../routes/NotMatch';
import Layout from './Layout';
import SinglePage from '../routes/SinglePage';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);
export default TodoApp;
