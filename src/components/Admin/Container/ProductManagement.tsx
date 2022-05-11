import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateProductItem from "./UpdateProductItem";
import "./ProductManagementStyle.css"
import UploadImage from "./UploadImage";
import AddPoduct from "./AddProduct";


type product = {
  id: number;
  nameProduct: string;
  model: string;
  image: string;
  price: number;
  describes: string;
  color: string;
};

type props = {
  deleteProduct: (id: Number) => void;
  setUpdateModal: (isUpdate: Boolean) => void
  product: product;
};

export default () => {
  const [products, setProducts] = useState<product[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    axios({
      method: "get",
      url: "http://localhost:9191/products",
      data: null,
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setUpdateModal = (tmp: Boolean) => {
    setIsUpdate(!tmp)
  }

  const deleteByProductID = (id: Number, Url: String) => {
    axios({
      method: "delete",
      url: `${Url}+${id}`,
      data: null,
    })
      .then((res) => {
        // deleteProductSize(id)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const deleteProduct = (id: Number) => {
    deleteByProductID(id, "http://localhost:9191/deleteProduct/")
    deleteByProductID(id, "http://localhost:9191/deleteProductSizeByProductId/")
    deleteByProductID(id, "http://localhost:9191/deleteCartByProductId/")
    deleteByProductID(id, "http://localhost:9191/deleteBillProductByProductId/")
    getApi();
  }
  // product, productSize, billProdcut, cart

  return (
    <div style={{ marginTop: 100 }}>
      <div className="container">
        <div className="add-product">
          <h1 className="h1-st1">Thêm sản phẩm</h1>
          <table>
            <thead>
              <tr>
                <th>Tên sản phẩm</th>
                <th>Loại</th>
                <th>Giá</th>
                <th>Mô tả</th>
                <th>Màu</th>
                <th>Ảnh</th>
                <th>Số lượng & Kích thước</th>
                <th>Thêm</th>
              </tr>
            </thead>
            <tbody>
              <AddPoduct reload={getApi} />
            </tbody>
          </table>
          
        </div>
        <h1 className="h1-st2">Bảng sản phẩm:  ({products.length} sản phẩm)</h1>
        <div className="table-product">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Loại</th>
                <th>Giá</th>
                <th>Mô tả</th>
                <th>Màu</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {
                isUpdate ?
                  <>
                    {products.map((product) => (
                      <UpdateProductItem reload={getApi} setUpdateModal={setUpdateModal} product={product} />
                    ))}
                  </>
                  :
                  <>
                    {products.map((product) => (
                      <DeleteProduct deleteProduct={deleteProduct} setUpdateModal={setUpdateModal} product={product} />
                    ))}
                  </>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const DeleteProduct = ({ deleteProduct, setUpdateModal, product }: props) => (
  <tr>
    <td >{product.id}</td>
    <td >{product.nameProduct}</td>
    <td >{product.model}</td>
    <td >{product.price}</td>
    <td >{product.describes}</td>
    <td >{product.color}</td>
    <td style={{display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "10px"}}>
      <button className="bttn" onClick={() => { deleteProduct(product.id) }}>xóa</button>
      <button className="bttn" onClick={() => setUpdateModal(false)}>Sửa</button>
    </td>
  </tr>
)
