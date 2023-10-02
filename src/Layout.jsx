import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (<>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/time">Time Tracking</Link></li>
      </ul>
    </nav>
    <main>
      <Outlet />
    </main>
  </>);
};
