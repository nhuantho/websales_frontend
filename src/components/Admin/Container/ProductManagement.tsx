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
  deleteProduct:(id : Number) => void;
  setUpdateModal : (isUpdate : Boolean) => void
  product : product;
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

  const setUpdateModal = (tmp : Boolean) => {
    setIsUpdate(!tmp)
  }
  
const deleteByProductID = (id : Number, Url : String) => {
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

const deleteProduct = (id : Number) => {
  deleteByProductID(id, "http://localhost:9191/deleteProduct/")  
  deleteByProductID(id, "http://localhost:9191/deleteProductSizeByProductId/")  
  deleteByProductID(id, "http://localhost:9191/deleteCartByProductId/")  
  deleteByProductID(id, "http://localhost:9191/deleteBillProductByProductId/")  
  getApi();
}
// product, productSize, billProdcut, cart

  return (
    <div style={{marginTop : 100}}>
      <h1>Bảng sản phẩm:  {products.length}</h1>
      {
        isUpdate ? 
        <>
          {products.map((product) => (
              <UpdateProductItem reload={getApi} setUpdateModal={setUpdateModal} product={product}/>
          ))}
        </>
        :
        <>
           {products.map((product) => (
              <DeleteProduct deleteProduct={deleteProduct} setUpdateModal={setUpdateModal}  product={product}/>
          ))}
        </>
    }

    <h2>Thêm sản phẩm</h2>
    <AddPoduct reload={getApi}/>

    </div>
  );
};

const DeleteProduct = ({deleteProduct,setUpdateModal,product} : props) => (
  <tr>
      <td >{product.id}</td>
      <td >{product.nameProduct}</td>
      <td >{product.model}</td>
      <td >{product.price}</td>
      <td >{product.describes}</td>
      <td >{product.color}</td>
      <button  onClick={() => {deleteProduct(product.id)}}>xóa</button>
      <button  onClick={() => setUpdateModal(false)}>Sửa</button>

  </tr>
)
