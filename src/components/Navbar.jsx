import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-2 " >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Julian Faustini
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav " >
      
              <li className="nav-item ms-5 px-2">
                <Link className="nav-link" to="/books">
                  Books
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/shortFiction">
                  Short Fiction
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/writingResources">
                  Writing Resources
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/exophony">
                  Exophony
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div>
                  <i className="bi bi-justify-right"></i>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/books">
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/shortFiction">
                      Short Fiction
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/writingResources">
                      Writing Resources
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/exophony">
                      Exophony
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};




     
    //     <li class="nav-item">
    //       <a class="nav-link" href="#">Features</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#">Pricing</a>
    //     </li>
    //     <li class="nav-item dropdown">
    //       <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //         Dropdown link
    //       </a>
    //       <ul class="dropdown-menu">
    //         <li><a class="dropdown-item" href="#">Action</a></li>
    //         <li><a class="dropdown-item" href="#">Another action</a></li>
    //         <li><a class="dropdown-item" href="#">Something else here</a></li>
    //       </ul>
    //     </li>
     
    // </div>

