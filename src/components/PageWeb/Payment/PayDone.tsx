import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./Payment.css"


export default function PayDone() {
  const navigate = useNavigate();
  const BackToProduct =() => {
    navigate("/product");
  }

  return (
    <div style={{marginTop: 100}}>
      <h1>Thanh Toán Thành Công</h1>
      <button className='bttn' onClick={() => BackToProduct() }>Back to Product</button>
    </div>
  )
}
