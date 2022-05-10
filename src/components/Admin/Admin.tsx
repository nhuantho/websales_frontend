import React from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  return (
    <div style={{ width: 200, marginTop: 100}}>
      <ListGroup>
        <button onClick={() => navigate("productmanagement")}>
          <ListGroup.Item>Quản lí sản phẩm</ListGroup.Item>
        </button>
        <button onClick={() => navigate("productsales")}>
          <ListGroup.Item variant="primary">
            Thống doanh thu theo loại sản phẩm
          </ListGroup.Item>
        </button>
        <button onClick={() => navigate("revenuebycustomer")}>
          <ListGroup.Item variant="secondary">
            Thống kê doanh thu theo khách hàng
          </ListGroup.Item>
        </button>
        <button onClick={() => navigate("revenueovertime")}>
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
