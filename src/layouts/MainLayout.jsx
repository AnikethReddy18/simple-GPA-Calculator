import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header className="header">
        <nav className="navbar">
          <Link to="/" className="nav-logo">VIT AP Utils</Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/gpa-calculator" className="nav-link">GPA Calculator</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
