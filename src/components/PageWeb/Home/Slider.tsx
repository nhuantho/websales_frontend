import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";

type item = {
  selectedIndex: number;
  e: () => void;
};

export default () => {
  return (
    <div className="slider">
      <Carousel className="slide-container">

      <Carousel.Item interval={1500}>
          <div className="slide-item">
            <div className="slide-image">
              <img
                className="d-block w-100"
                src={require("./../../../images/background/bg6.jpg")}
                alt="Image One"
              />
            </div>
            <Carousel.Caption>
              <div className="slide-content">
                <h3>Are you looking for a new style?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="btn btn-primary"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/product';
                  }}
                > Show Now</button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <div className="slide-item">
            <div className="slide-image">
              <img
                className="d-block w-100"
                src={require("./../../../images/background/bg8.jpg")}
                alt="Image One"
              />
            </div>
            <Carousel.Caption>
              <div className="slide-content">
                <h3>T shirt</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="btn btn-primary"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/product/shirt';
                  }}
                > Show Now</button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <div className="slide-item">
            <div className="slide-image">
              <img
                className="d-block w-100"
                src={require("./../../../images/background/bg4.jpg")}
                alt="Image One"
              />
            </div>
            <Carousel.Caption>
              <div className="slide-content">
                <h3>Shoe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="btn btn-primary"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/product/shoe';
                  }}
                > Show Now</button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <div className="slide-item">
            <div className="slide-image">
              <img
                className="d-block w-100"
                src={require("./../../../images/background/bg3.jpg")}
                alt="Image One"
              />
            </div>
            <Carousel.Caption>
              <div className="slide-content">
                <h3>Watch</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="btn btn-primary"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/product/watch';
                  }}
                > Show Now</button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <div className="slide-item">
            <div className="slide-image">
              <img
                className="d-block w-100"
                src={require("./../../../images/background/bg7.jpg")}
                alt="Image One"
              />
            </div>
            <Carousel.Caption>
              <div className="slide-content">
                <h3>Always ensure quality and customer service!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="btn btn-primary"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/store';
                  }}
                > Read more</button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};
