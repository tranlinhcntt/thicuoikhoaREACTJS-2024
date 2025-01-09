import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../App.css'

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3100/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products', error));
  }, []);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <table className="table table-striped " >
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Mô tả</th>
            <th>Giá</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td><Link to={`/product/${product.id}`}>{product.title}</Link></td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/edit-product/${product.id}`} className="btn btn-warning btn-sm ml-2">Sửa</Link>
                <Link to={`/delete-product/${product.id}`} className="btn btn-danger btn-sm ml-2">Xóa</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
