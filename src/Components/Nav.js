import React, { useState } from 'react';
import 'jquery'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Weather from './Weather';

const Nav = () => {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(name); 
    setName(""); 
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Weather Buddy</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active">Home</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Weather</span>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  How to use?
                </span>
                <ul className="dropdown-menu">
                  <li><span className="dropdown-item">Action</span></li>
                  <li><span className="dropdown-item">Another action</span></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><span className="dropdown-item">Something else here</span></li>
                </ul>
              </li>
              <li className="nav-item">
                <span className="nav-link disabled">Disabled</span>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleInputChange}
                value={name}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {search && <Weather search={search} />} 
    </>
  );
};

export default Nav;
