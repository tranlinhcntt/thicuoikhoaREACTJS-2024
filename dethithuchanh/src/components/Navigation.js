import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">        
        <Link className="navbar-brand" to="/">Home</Link>        
        <Link className="navbar-brand" to="/add-product">Thêm sản phẩm</Link>    
      </div>
    </nav>
      </>
  );
}

export default Navigation;
