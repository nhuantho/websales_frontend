// import { View, Text } from 'react-native'
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Navbar/Navbar";

type props = {
  onClick: () => void;
  id: number;
  nameProduct: string;
  model: string;
  image: string;
  price: number;
  describes: string;
  color: string;
};

export default function ProductItem({
  onClick,
  id,
  nameProduct,
  model,
  image,
  price,
  describes,
  color,
}: props) {
  const navigate = useNavigate();
  const { idP, setIdP } = useAppContext();
  const togg = () => {
    onClick();
    setIdP(id);
  };

  return (
    <Button id="item" onClick={togg}>
      <div className="container">
        <div className="image">
        <img src={image} />
        </div>
        <div className="infomation">
          <a className="name" color="black" href="abc">
            {nameProduct}
          </a>
        </div>
        <div className="price">
          <div>{price}<span>đ</span></div>
        </div>
      </div>
    </Button>
  );
}
