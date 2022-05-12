import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../Navbar/Navbar';

type Array_productSizes = [Type_ProductSize]

type Type_ProductSize = {
    id : number,
    product_id : number,
    product: {
      id: number,
      nameProduct: String,
      model: String,
      image: String,
      price: String,
      describes: String,
      color: String,    
    },
    size_id: number,
    size: {
      id : number,
      size : String,
    },
    quantity: number,
}



export default ()  => {
    const {idP, setIdP} = useAppContext();
    const [productSize, setProductSize] = useState([]);

    useEffect(() => {
        getAPI();
    }, []);
    const getAPI = () => {
    axios({
        method: "get",
        url: `http://localhost:9191/productSizeByProductId/${idP}`,
        data: null,
        })
          .then((res) => {
            setProductSize(res.data);
            console.log(res.data);
            
          })
          .catch((err) => {
            console.log(err);
          });
    };

  return (
    <div style={{marginTop: 100}}>
        <h1>ID Product: {idP}</h1>
        <table>
        
            <thead>
            <tr>
                <th>Size</th>
                <th>Số lượng</th>
                <th>Update</th>
            </tr>
            </thead>
            
            <tbody>
            {
                productSize.map(ps => (
                    <Product_Size ps={ps} />
                ))
            }
            </tbody>
        </table>
    </div>
    
  )
}

type props = {
    ps : Type_ProductSize;
}


const Product_Size = ({ps} : props) => {

    const [quantity, setQuantity] = useState(ps.quantity);
    const update_quantity_ProductSize = () => {  
        axios({
          method: "put",
          url: "http://localhost:9191/updateProductSize",
          data: {
            "id": ps.id,
            "quantity": quantity,
        }
        })
          .then((res) => {
        })
          .catch((err) => {
            console.log(err);
        });
        alert("update thanh cong")
      }
    return (
      <tr>
        <td>{ps.size.size}</td>
        <td>
          <input
            className="input"
            type="text"
            placeholder= {quantity+""}
            onChange={(e) => setQuantity(Number(e.target.value))}  
          />
        </td>
        <td>
            <button onClick={() => update_quantity_ProductSize()}>Update</button>
        </td>
      </tr>
    )
  }
  
  
  