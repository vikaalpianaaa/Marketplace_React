import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Layout from "./components/pages/layout";
import Login from './components/pages/login';
import Registrasi from "./components/pages/registrasi"
import Home from "./components/pages/Home/Home";
import Footer from "./components/main asset/Footer";
import KeranjangBelanja from "../src/components/pages/keranjangbelanja/keranjang";
import Navbar from "./components/pages/navbar/navbar";
import DetailProduct from "./components/pages/detailproduct/detail";
import TokoDetail from "./components/pages/Detailtoko/detailtoko";
import Profile from "./components/pages/Profilepengguna/profilepengguna";
import Checkout from "./components/pages/Checkout/checkout";
import RatingUlasan from "./components/pages/Rating/rating";
import StatusPengiriman from "./components/pages/Statuspengiriman/statuspengiriman";
import Backbutton from "./components/pages/Backbutton/backbutton";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="registrasi" element={<Registrasi />} />
        <Route path="home" element={<Home />} />
        <Route path="footer" element={<Footer/>} />
        <Route path="navbar" element={<Navbar/>} />
        <Route path="detailproduct" element={<DetailProduct/>} />
        <Route path="keranjangbelanja" element={<KeranjangBelanja/>}/>
        <Route path="tokodetail" element={<TokoDetail/>}/>
        <Route path="profilepengguna" element={<Profile/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="ratingulasan" element={<RatingUlasan/>}/>
        <Route path="statuspengiriman" element={<StatusPengiriman/>}/>
        <Route path="backbutton" element={<Backbutton/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);