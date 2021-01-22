import React from "react";
import { Link } from "react-router-dom";

export const NavBarAdmin: React.FC = () => {
  return (
    <div className="nav-bar-admin">
      <nav className="main-nav-admin">
        <ul>
          <li>
            <Link to="/cabinet/admin">Главная</Link>
          </li>
          <li>
            <Link to="/cabinet/admin/users">Пользователи</Link>
          </li>
          <li>
            <Link to="/cabinet/admin/databases">Базы</Link>
          </li>
          <li>
            <Link to="/cabinet/admin/chat">Чат</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
