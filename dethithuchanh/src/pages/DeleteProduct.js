import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteProduct = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:3100/products/${id}`)
      .then(() => {
        alert('Xóa ok');
        navigate('/'); 
      })
      .catch(error => {
        console.error("Lỗi rồi", error);
      });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <p>Bạn muốn xóa sản phẩm này?</p>
      <button className="btn btn-danger" onClick={handleDelete}>Xóa</button>
      <button className="btn btn-secondary ml-2" onClick={handleCancel}>Hủy</button>
    </div>
  );
};

export default DeleteProduct;
