import React from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

export default () => {
  const navigate = useNavigate();
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Quản lý</h1>
      </div>
      <ListGroup>
        <button className="btn-admin" onClick={() => navigate("productmanagement")}>
          <ListGroup.Item>Quản lí sản phẩm</ListGroup.Item>
        </button>
        <button className="btn-admin" onClick={() => navigate("productsales")}>
          <ListGroup.Item variant="primary">
            Thống doanh thu theo loại sản phẩm
          </ListGroup.Item>
        </button>
        <button className="btn-admin" onClick={() => navigate("revenuebycustomer")}>
          <ListGroup.Item variant="secondary">
            Thống kê doanh thu theo khách hàng
          </ListGroup.Item>
        </button>
        <button className="btn-admin" onClick={() => navigate("revenueovertime")}>
          <ListGroup.Item variant="success">
            Thống kê doanh thu theo thời gian
          </ListGroup.Item>
        </button>
        {/*       
      <ListGroup.Item variant="danger">Danger</ListGroup.Item>
      <ListGroup.Item variant="warning">Warning</ListGroup.Item>
      <ListGroup.Item variant="info">Info</ListGroup.Item>
      <ListGroup.Item variant="light">Light</ListGroup.Item>
      <ListGroup.Item variant="dark">Dark</ListGroup.Item> */}
      </ListGroup>
    </div>
  );
};
