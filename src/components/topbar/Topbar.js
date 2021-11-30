import './topbar.css'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <header className="navbar navbar-expand-md navbar-light d-print-none">
      <div className="container-xl">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand pe-0 pe-md-3">
          <Link to="/">
            <img src="/img/loteriaLogo.png" width="110" height="32" alt="AYUDA" className="navbar-brand-image" />
          </Link>
        </h1>
        <div className="navbar-nav flex-row order-md-last">
          <div className="nav-item dropdown">
            <Link to="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
              <div className="d-none d-xl-block">
                <span className="avatar avatar-sm avatar-rounded"><h5><i className="bi bi-pencil"></i></h5></span>
              </div>
            </Link>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <Link to="/" className="dropdown-item"><i className="bi bi-box-arrow-in-right dropdown-item-icon"></i>Finalizar sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
