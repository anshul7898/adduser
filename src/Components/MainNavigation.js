import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
            <NavLink
              to="/"
              end
            >
            </NavLink>
      </nav>
    </header>
  );
}

export default MainNavigation;
