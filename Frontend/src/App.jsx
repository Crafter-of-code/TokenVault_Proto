import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./styles/App.module.css";
function App() {
  return (
    <React.Fragment>
      <header>
        <NavLink
          to="/signin"
          className={({ isActive }) =>
            isActive ? styles.isActivecolor : styles.notActivecolor
          }
        >
          Signin
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? styles.isActivecolor : styles.notActivecolor
          }
        >
          Login
        </NavLink>
      </header>
      <Outlet />
    </React.Fragment>
  );
}

export default App;
