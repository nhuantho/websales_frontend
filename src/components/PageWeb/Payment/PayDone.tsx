import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function PayDone() {
  const navigate = useNavigate();
  const BackToProduct =() => {
    navigate("/product");
  }

  return (
    <div style={{marginTop: 100}}>
      <h1>Thanh toan thanh cong</h1>
      <button onClick={() => BackToProduct() }>Back to Product</button>
    </div>
  )
}
