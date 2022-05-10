import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import ProductManagement from "../Admin/Container/ProductManagement";
import ProductSales from "../Admin/Container/ProductSales";
import RevenueByCustomer from "../Admin/Container/RevenueByCustomer";
import RevenueOverTime from "../Admin/Container/RevenueOverTime";
import Cart from "../PageWeb/Cart/Cart";
import Home from "../PageWeb/Home/Home";
import ProductDetails from "../PageWeb/Products/ProductDetails";
import Products from "../PageWeb/Products/Products";
import Signin from "../PageWeb/Signin/Signin";
import Signup from "../PageWeb/Signup/Signup";
import Store from "../PageWeb/Store/Store";
import User from "../User/User";
import Bill from "../PageWeb/Bill/Bill";
import "./Navbar.css";
import Payment from "../PageWeb/Payment/Payment";
import PayDone from "../PageWeb/Payment/PayDone";

type user = {
  id: number;
  fullname: string;
  dob: string;
  gender: string;
  phone: string;
  address: string;
  username: string;
  password: string;
  isAdmin: number;
  note: string;
};

const testUser = {
  id: 0,
  fullname: "",
  dob: "",
  gender: "",
  phone: "",
  address: "",
  username: "",
  password: "",
  isAdmin: 3,
  note: "",
};

type appContext = {
  idP: number;
  setIdP: (c: number) => void;
  user: user;
  setUser: (c: user) => void;
  u: user[];
  setU: (c: user[]) => void;
};

export const AppContact = createContext<appContext>({
  idP: 0,
  setIdP: () => {},
  user: {} as user,
  setUser: () => {},
  u: [],
  setU: () => {}
});

export const useAppContext = () => useContext(AppContact);
export default () => {
  const [idP, setIdP] = useState<number>(0);
  const [user, setUser] = useState<user>(testUser as user);
  const [u, setU] = useState<user[]>([])
  console.log(user);
  return (
    <AppContact.Provider value={{ idP, setIdP, user, setUser, u, setU }}>
      <Router>
        <div>
          <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Container fluid>
              <Navbar.Brand as={Link} to={"/"}>
                Websales
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/product"}>
                    Products
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/store"}>
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to={user.id === 0?"/signin":"/cart"}>
                    Cart
                  </Nav.Link>
                  <NavDropdown title="User" id="navbarScrollingDropdown">
                    <NavDropdown.Item
                      as={Link}
                      to={
                        user.id === 0
                          ? "/signin"
                          : user.isAdmin === 1
                          ? "/admin"
                          : "/user"
                      }
                    >
                      {user.id === 0
                        ? "Sign in"
                        : user.isAdmin === 1
                        ? "Admin"
                        : "Profile"}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to={user.id === 0 ? "/signup" : "/signin"}
                      onClick={() => setUser(testUser)}
                    >
                      {user.id === 0 ? "Sign up" : "Log out"}
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/details" element={<ProductDetails />} />
            <Route path="/store" element={<Store />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/admin/productmanagement"
              element={<ProductManagement />}
            />
            <Route path="/admin/productsales" element={<ProductSales />} />
            <Route
              path="/admin/revenuebycustomer"
              element={<RevenueByCustomer />}
            />
            <Route
              path="/admin/revenueovertime"
              element={<RevenueOverTime />}
            />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment/payDone" element={<PayDone />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </Router>
    </AppContact.Provider>
  );
};
