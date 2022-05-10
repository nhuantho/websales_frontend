import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import "./Bill.css"

const BillProduct = {
    "id": 1,
    "bill_id": 2,
    "bill": {
        "id": 2,
        "client_id": 1,
        "user": {
            "id": 1,
            "fullname": "Lý Mạnh Huy",
            "dob": "07/04/2001",
            "gender": "Nam",
            "phone": "0123456",
            "address": "Hưng yên",
            "username": "a",
            "password": "a",
            "isAdmin": 0,
            "note": "ádfasdfasdf"
        },
        "datePayment": "5/5/2022",
        "infoPayment": "abc"
    },
    "product_id": 30,
    "product": {
        "id": 30,
        "nameProduct": "Áo thun xanh nước biển có hình nhân vật",
        "model": "Áo",
        "image": "https://firebasestorage.googleapis.com/v0/b/test-62604.appspot.com/o/img30.jpg?alt=media&token=fdd80f5a-18e6-48b0-928a-aa204b7215f4",
        "price": 200000,
        "describes": "Chất liệu vải mềm, mặc thoải mái",
        "color": "Xanh"
    },
    "quatity": 2,
    "unitPrice": 120000
}


export default () => {

    const [billProduct, setBillProduct] = useState([BillProduct])

    useEffect(() => {
        getBillProduct();
      }, []);

      const getBillProduct = () => {
        axios({
          method: "get",
          url: `http://localhost:9191/billProducts`,
          data: null,
        })
          .then((res) => {
            setBillProduct(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };      

      console.log(billProduct);
      
  return (

    <div>
        <h1 style={{ marginTop: 100}}>Bill</h1>

        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>date</th>
                    <th>model</th>
                    <th>price</th>
                    <th>color</th>
                    <th>quantity</th>
                    <th>unitPrice</th>
                </tr>
            </thead>
            <tbody>
                {
                    billProduct.map((bill) => (
                        <tr>
                            <td>{bill.id}</td>
                            <td>{bill.product.nameProduct}</td>
                            <td>{bill.bill.datePayment}</td>
                            <td>{bill.product.model}</td>
                            <td>{bill.product.price}</td>
                            <td>{bill.product.color}</td>
                            <td>{bill.quatity}</td>
                            <td>{bill.unitPrice}</td>
                        </tr>
                    ))
                }
                

            </tbody>
        </table>

    </div>
  );
};
