import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../Navbar/Navbar';
import "./Payment.css"


type CartProduct = {
  id: number,
  client_id: number,
  user : {
    id: number,
    fullname: string,
    dob: string,
    gender: string,
    phone: string,
    address: string,
    username: string,
    password: string,
    isAdmin: number,
    note: string,

  },
  product_id : number,
  product : {
    id: number,
    nameProduct:string,
    model:string,
    image:string,
    price: number,
    describes:string,
    color:string,    
  }
  size_id : number,
  size: {
    id: number,
    size: string
  }
  extraDate : String,
  quatity : number,
}

type BillProduct = {
  product_id: number;
  quatity: number;
  unitPrice: number;
}


export default function Payment() {

  const navigate = useNavigate();

  const { user, setUser } = useAppContext();
  const [carts, setCarts] = useState<CartProduct[]>([]);
  // const [billId, setBillId] = useState(0);

  const [infoPayment, setInfoPayment] = useState("online"); 
  const checkInfoPayment = (data: string) => {
    if(infoPayment == data) 
      return 'red'
    else 
      return 'white'
  }

  // date time
  var showDate = new Date();
  var date = showDate.getDate()+"/"+(showDate.getMonth()+1)+"/"+showDate.getFullYear();
  var dateTime = showDate.getHours()+":"+showDate.getMinutes()+":"+showDate.getSeconds(); 

  // Tính tổng tiền
  var Total = 0;
  for( let i = 0; i < carts.length; i++){
    Total += carts[i].product.price * carts[i].quatity
  }
  //=================================================================
  const [modalBank, setModaBank] = useState(true)
  const [bank,setBank] = useState("VCB")
  const listBank = ["VCB","AGRI","VPBANK","OceanBank","Techcombank","MB","NCB"]

  const checkBank = (data : String) => {
    if(data == bank)
      return "orange"
    else return "white"
  }

  //===============================================================
  // lấy thông tin sản phẩm có trong cart
  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = () => {
    axios({
      method: "get",
      url: "http://localhost:9191/cartByClientId/"+user.id,
      data: null,
    })
      .then((res) => {
        setCarts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //==================================================================

  const AddBill = () => {
    axios({
      method: "post",
      url: `http://localhost:9191/addBill`,
      data: {
        "client_id": user.id,
        "datePayment": showDate.getHours()+":"+showDate.getMinutes()+":"+showDate.getSeconds() + " " + showDate.getDate()+"/"+(showDate.getMonth()+1)+"/"+showDate.getFullYear(),
        "infoPayment": infoPayment
      },
    })
      .then((res) => {
        AddManyBillProduct(res.data.id)       
      })
      .catch((err) => {console.log(err);});
  }

  const AddBillProduct = (billId: number, product_id: number, quatity: number, unitPrice:number) => {
    axios({
      method: "post",
      url: `http://localhost:9191/addBillProduct`,
      data: {
        "bill_id": billId,
        "product_id":product_id,
        "quatity": quatity,
        "unitPrice" : unitPrice
      },
    })
      .then((res) => {})
      .catch((err) => {console.log(err);});
  }

  const AddManyBillProduct = (id : number) => {
    for(let i=0; i < carts.length; i++ ){
      AddBillProduct(id,carts[i].product_id, carts[i].quatity, carts[i].quatity*carts[i].product.price)
    }
    DeleteAllCartByClientId();
    navigate("payDone")
    alert("Thanh toan thanh cong")
  }

  //==================================================================
  
  const  DeleteAllCartByClientId = () => {
    axios({
      method: "delete",
      url: `http://localhost:9191/deleteAllCart/` + user.id,
      data: null,
    })
      .then((res) => {})
      .catch((err) => {console.log(err);});
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
      <div>
        {
          carts.map((cart) => (
            <ProductInCart  cart={cart}/>
          ))
        }
      </div>
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
      
      <button onClick={() => (AddBill())}>Thanh toán</button>

    </div>
  )
}

type props = {
  cart : CartProduct
}

// hien thong tin san pham trong hooa don
const ProductInCart = ({cart} : props) => (
  <div>
    <img src={cart.product.image} className="cartImage"/>
    <span>{cart.product.nameProduct}</span>
    <span>{cart.product.model}</span>
    <span>{cart.product.price}</span>
    <span>{cart.product.color}</span>
  </div>
)
// {
//   "bill_id":1,
//   "product_id":60,
//   "quatity": 1,
//   "unitPrice" : 1
// }