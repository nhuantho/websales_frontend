import axios from 'axios';
import React, { useState } from 'react'
import { useAppContext } from '../../Navbar/Navbar';
import "./Payment.css"

const Cart = {
  "id": 1,
  "client_id": 2,
  "user": {
      "id": 2,
      "fullname": "Bùi Cảnh Nhuận",
      "dob": "20/07/2001",
      "gender": "Nam",
      "phone": "0329689087",
      "address": "Phú Thọ",
      "username": "nhuan1",
      "password": "12345",
      "isAdmin": 0,
      "note": ""
  },
  "product_id": 10,
  "product": {
      "id": 10,
      "nameProduct": "Áo thun đen có hình",
      "model": "Áo",
      "image": "https://firebasestorage.googleapis.com/v0/b/test-62604.appspot.com/o/img10.jpg?alt=media&token=5ed15472-a5c4-402e-b0a7-ee38f0351fc2",
      "price": 200000,
      "describes": "Chất liệu vải mềm, mặc thoải mái",
      "color": "Trắng"
  },
  "size_id": 3,
  "size": {
    "id": 3,
    "size": "L"
  },
  "extraDate": "5/5/2022",
  "quatity": 2
}

type BillProduct = {
  product_id: number;
  quatity: number;
  unitPrice: number
}

export default function Payment() {
  const { user, setUser } = useAppContext();
  const [carts, setCarts] = useState([Cart])
  const [billProduct, setBillProduct] = useState<BillProduct[]>([])
  const [infoPayment, setInfoPayment] = useState("online"); 
  const [idB, setIdB] = useState(0);
  const checkInfoPayment = (data: string) => {
    if(infoPayment == data) 
      return 'red'
    else 
      return 'white'
  }

  // date time
  var showDate = new Date();
  var date = showDate.getDate()+"/"+(showDate.getMonth()+1)+"/"+showDate.getFullYear();
  console.log(date);
  
  var dateTime = showDate.getHours()+":"+showDate.getMinutes()+":"+showDate.getSeconds(); 

  //
  const [modalBank, setModaBank] = useState(true)
  const [bank,setBank] = useState("VCB")
  const listBank = ["VCB","AGRI","VPBANK","OceanBank","Techcombank","MB","NCB"]

  const checkBank = (data : String) => {
    if(data == bank)
      return "orange"
    else return "white"
  }

  const AddBill = () => {
    axios({
      method: "post",
      url: `http://localhost:9191/addBill`,
      data: {
        "client_id": user.id,
        "datePayment": date,
        "infoPayment": infoPayment
      },
    })
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const GetBill = () => {
    axios({
      method: "get",
      url: `http://localhost:9191/bills`,
      data: null
    })
      .then((res) => {
        setIdB(res.data[res.data.length-1].id);
        console.log(idB);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const AddBillProduct = () => {
    axios({
      method: "post",
      url: `http://localhost:9191/addBill`,
      data: {
        billProduct
      },
    })
      .then((res) => {
        console.log("AddBillProduct");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const GetCart = () => {
    axios({
      method: "get",
      url: "http://localhost:9191/cartByClientId/"+user.id,
      data: null,
    })
      .then((res) => {
        setCarts(res.data)
        console.log(carts);
        console.log("GetCart");
        console.log(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeleteCart = () => {
    axios({
      method: "delete",
      url: `http://localhost:9191/deleteAllCart`,
      data: null
    })
      .then((res) => {
        console.log("Delete Cart");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const ArrayBillProduct = () => {
    let abp = [] as BillProduct[]
    let bp = {} as BillProduct
    carts.forEach((cart) => {
      bp = {
        product_id:cart.product_id, quatity : cart.quatity, unitPrice : cart.product.price*cart.quatity
      }
      abp.push(bp)
    })
    setBillProduct(abp)
  }

  const AddToBill = () => {
    AddBill();
  }

  return (
    <div id="body">
      <h2>thanh toán</h2>
      <p>
        Thông tin hóa đơn
        .................
        .................
        .................
        .................
      </p>
      <button style={{backgroundColor: checkInfoPayment("online") }}
        onClick = {() => {setInfoPayment("online"); setModaBank(!modalBank)}}
      >
        Thanh toán quan tài khoản ngân hàng
      </button>

      <button style={{backgroundColor: checkInfoPayment("offline") }}
        onClick = {() => {setInfoPayment("offline"); setModaBank(false)}}
      >
        Thanh toán khi nhận hàng
      </button>

      {
        modalBank ? 
          <div style={{backgroundColor:"green", width: "100%", padding: 30}}>
            <h3>Chọn ngân hàng</h3>
            {
              listBank.map((bank)=>(
                  <button 
                    style={{backgroundColor: checkBank(bank)}}
                    onClick={() => setBank(bank)}
                  >{bank}</button>
              ))
            }

          </div> 
        : 
          <></>
      }

      <div>
        <span>Thời gian</span> {dateTime + " " + date}
      </div>
      
      <button onClick={() => (AddToBill())}>Thanh toán</button>

    </div>
  )
}
