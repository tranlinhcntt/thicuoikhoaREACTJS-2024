import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
  const [product, setProduct] = useState({ title: '', price: '', description: '' }); // Sử dụng title
  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {    
    axios.get(`http://localhost:3100/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("lỗi rồi", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3100/products/${id}`, product)
      .then(() => {
        alert('cập nhật ok');
        navigate('/'); 
      })
      .catch(error => {
        console.error("lỗi rồi", error);
      });
  };

  return (
    <div>
      <h2>Cập nhật sản phẩm</h2>
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
          />
        </div>
        <button type="submit" className="btn btn-primary">Sửa</button>
        <button type="button" className="btn btn-secondary ml-2" onClick={() => navigate('/')}>Trở lại</button>
      </form>
    </div>
  );
};

export default EditProduct;
