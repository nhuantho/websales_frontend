import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
import "./ProductItem";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";
import Footer from "../Store/Footer";



type product = {
  id: number;
  nameProduct: string;
  model: string;
  image: string;
  price: number;
  describes: string;
  color: string;
};

export default () => {

  const [products, setProducts] = useState<product[]>([]);
  useEffect(() => {
    getAPI("http://localhost:9191/products");
  }, []);
  
  const getAPI = (url : string) => {
    axios({
      method: "get",
      url: url,
      data: null,
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navigate = useNavigate();

  function onClick() {
    navigate("details");
  }

  //=================================================
  const [modalColor, setModalColor] = useState(false);
  const [color, setColor] = useState("All");
  const [model, setModel] = useState("")

  const checkColor = (data : String) => {
    if(data == color) 
      return "#f6de04"
    else 
      return "white"
  }

  const getAPIbyColor = (color : string) => {
    setColor(color)
    if (color == "All") {
      getAPI("http://localhost:9191/products");
    } else {
      getAPI("http://localhost:9191/productByColor/" + color)
    }
  }

  //===================================================
  const [modalPrice, setModalPrice] = useState(false)
  const [price1, setPrice1] = useState(0)
  const [price2, setPrice2] = useState(0)

  const getAPIbyPrice = () => {
  
    axios({
      method: "post",
      url: "http://localhost:9191/productByPrice",
      data: {
        "price1": price1-1,
        "price2": price2+1,
      },
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
    <div>
      {/* header */}
      

      {/* body */}
      <div id="bodySection">
        
        {/* loc theo mau */}
        <div className="btn-filter">
        <div id="headerSection">
        <ul className="headerList">
          <li className="headerItem">
            <button className="link bttn" onClick={() => getAPI("http://localhost:9191/products")}>
              Xem tất cả
            </button>
          </li>
          <li className="headerItem">
            <button className="link bttn" onClick={() => getAPI("http://localhost:9191/productByModel/Áo")}>
              Áo
            </button>
          </li>
          <li className="headerItem">
            <button className="link bttn" onClick={() => getAPI("http://localhost:9191/productByModel/Giày")}>
              Giày
            </button>
          </li>
          <li className="headerItem">
            <button className="link bttn" onClick={() => getAPI("http://localhost:9191/productByModel/Đồng hồ")}>
              Đồng hồ
            </button>
          </li>
        </ul>
      </div>
          <button className="btn-filter-color bttn"
            onClick={() => {setModalColor(!(modalColor)); setModalPrice(false)} }
          > 
            Lọc Theo Màu
          </button>

          <button className="btn-filter-price bttn"
            onClick={() => {setModalPrice(!(modalPrice)); setModalColor(false)}}
          >
            Lọc Theo Giá
          </button>

          <div>
          {
            modalColor ? 
              <div id="modalColor">
                {/* <h5>Lọc sản phầm theo màu sắc</h5> */}
                <div className="buttonContainer">
                  {
                    ["All","Đỏ","Xanh","Đen","Hồng","Nâu","Cam","Trắng","Xám","Tím","Vàng","Bạc"]
                    .map((value)=> (
                      <button className="buttonColor" style={{backgroundColor: checkColor(value) }}
                        onClick={() => getAPIbyColor(value)}
                      >
                        {value}
                      </button>
                    ))
                  }
                </div>
              </div> 
            : 
            <></>
          }
        </div>

          {/* loc theo gia */}
          <div>
          {
            modalPrice ? 
              <div id="modalColor">
                <h5>Lọc theo giá</h5>
                <input
                  placeholder="giá <="
                  onChange={(e) => setPrice1(Number(e.target.value))}
                />
                <input
                  placeholder="<= giá"
                  onChange={(e) => {setPrice2(Number(e.target.value))}}
                />
                <div>
                  <button className="btn-filter-price bttn"
                    onClick={() => getAPIbyPrice()}
                  >Lọc</button>
                </div>
              </div> 
            : 
            <></>
          }
          </div>
        </div>
        


        {/* hien thi san pham */}
        <div className="product-container">
          
          {products.map((product) => (
            <ProductItem
              onClick={onClick}
              id={product.id}
              nameProduct={product.nameProduct}
              model={product.model}
              image={product.image}
              price={product.price}
              describes={product.describes}
              color={product.color}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

