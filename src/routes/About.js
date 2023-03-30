import { NavLink, Outlet } from 'react-router-dom';
import '../styles/About.module.css';

const About = () => (
  <>
    <h1 className="h1">About page.</h1>
    <div className="about">
      <ul className="about_list">
        <li>
          <NavLink to="about-app">About app</NavLink>
        </li>
        <li>
          <NavLink to="about-developer">About developer</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  </>
);
export default About;
