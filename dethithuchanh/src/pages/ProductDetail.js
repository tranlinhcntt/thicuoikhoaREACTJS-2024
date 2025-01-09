import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    
    axios.get(`http://localhost:3100/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false); 
      })
      .catch(error => {
        setError('Không thể tải thông tin sản phẩm');
        setLoading(false);
        console.error('Error fetching product:', error);
      });
  }, [id]);
  
  if (loading) return <p>Đang tải thông tin sản phẩm...</p>;
  
  if (error) return <p className="text-danger">{error}</p>;
 
  return (
    <>
    <div className='product-contaier'>
      <div className='product-title'>
        <p>Chi tiết sản phẩm</p>
      </div>
      <div className='product-detail'>
      <h3><strong>Tên:</strong> {product.title}</h3>
      <p><strong>Mô tả:</strong> {product.description}</p>
      <p><strong>Giá:</strong> {product.price}</p>     
      <Link to="/" className="btn btn-primary">Trở lại</Link>
      </div>
    </div>

    <div className='product-detail'>      
      <div className='product-mm'>
      
      </div>
    </div>
    </>
  );
}

export default ProductDetail;
