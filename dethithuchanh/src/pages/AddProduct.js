import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function AddProduct() {
  const [product, setProduct] = useState({ title: '', price: '', description: '' }); // Sử dụng "title" thay vì "name"
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3100/products', product)
      .then(() => {
        setAlertMessage('Thêm thành công!');
        setTimeout(() => navigate('/'), 2000);
      })
      .catch(error => {
        setAlertMessage('Thêm không thành công');
      });
  };

  return (
    <div>
     
      {alertMessage && (
        <div className={`alert ${alertMessage.includes('không') ? 'alert-error' : 'alert-success'}`}>
          {alertMessage}
        </div>
      )}
     
      <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label>Tên sản phẩm</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={product.title}
            onChange={handleChange}          
            required
          />
        </div>
        <div className="form-group">
        <label>Giá</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}           
            required
          />
        </div>
        <div className="form-group">
        <label>Mô tả</label>
          <textarea
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}            
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Thêm</button>
      <button className="btn btn-success ml-2"><Link to="/" >Trở lại</Link></button> 
      </form>
    </div>
  );
}

export default AddProduct;
