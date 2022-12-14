import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
           <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-danger">
                    <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Accueil</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/add">Ajout</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;