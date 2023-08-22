import React from "react";
import { Row, Col, Typography, Timeline, Image, Divider, Layout } from "antd";
import { Checkbox } from 'antd'
import rekomendasi5 from "../Image/rekomendasi 5.png";
import Wallet from "../Image/Wallet.png";
import Address from "../Image/Address.png";
import Backbutton from '../Backbutton/backbutton';
import Footer from '../../main asset/Footer';

const { Title, Paragraph } = Typography;
const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
};

const Checkout = () => {
  return (
    <>
    <Backbutton/>
    <br/>
    <Layout style={{ backgroundColor : 'white', marginLeft: '50px', marginRight: '50px', fontSize :'20px' }}>
            <div style={{ display: 'flex',  alignItems: 'center', marginTop: '50px' }}>
                <img src={Address} alt='alamat'></img>
                <p><strong>Alamat Pengiriman</strong> <br />Wardah Maulina | (+62) 823345623442
                Jl. Sadewa no 23 rt 04/01 Semarang Utara
                Suyudono, Kab Semarang, Jawa Tengah, ID 23456</p>
            </div>
        <div>
            <div style={{ borderBottom: '2px solid black', marginTop:'50px'}}></div>
        </div>
        <div style={{display: 'flex', alignitems : 'center', marginTop : '50px', fontSize :'20px'}}>
            <p style={{ backgroundColor : '#606C5D' }}>Aspo Mall</p>
            <p style={{ marginLeft : '30px', fontWeight: 'bold' }}>Dyriana Official Shop</p>
        </div>
        <div style={{ paddingTop: '24px', paddingBottom: '24px', paddingLeft: '10px', paddingRight: '10px' }}>
            <Row gutter={24} style={{ background: "#f0f0f0", padding: "16px"}}>
                <Col span={6}>
                <Image
                    src={rekomendasi5}
                    alt="Foto Produk"
                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                </Col>
                <Col span={18}>
                <Paragraph style={{ fontSize :'20px' }}>
                    Bandeng Juwana<br />
                    Rp. 45.000
                </Paragraph>
                </Col>
            </Row>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'  }}>
                <Checkbox onChange={onChange} style={{ fontSize: '20px', marginTop: '50px' }}>Proteksi Efek Samping Produk</Checkbox>
                <p style={{ marginLeft: 'auto', marginTop: '42px', color: '#757272'}}>Rp. 45.000</p>
            </div>
            <div>
                <p style={{ marginTop: '20px' }}>Melindungi dari bahaya, ketidakyamanan, atau perawatan rawat inap yang timbul karena penggunaan atau konsumsi produk . <a style={{ color: '#196CE9'}}>Pelajari</a></p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px' }}>
                <img src={Wallet} alt='dompet'></img>
                <p>Voucer Toko</p>
                <p style={{ marginLeft: 'auto', marginTop: '42px', color: '#757272'}}>Gunakan/masukan data</p>
            </div>
            <div>
                <div style={{ borderBottom: '2px solid black', marginTop:'50px'}}></div>
            </div>
            <div style={{ marginTop: '50px', color: '#757272'}}>
                <p>Opsi Pengiriman </p>
            </div>
            <div>
                <div style={{ borderBottom: '2px solid black', marginTop:'50px'}}></div>
            </div>
            <div>
                <p style={{ marginTop: '50px' }}>Reguler</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'  }}>
                <p style={{ color: '#757272' }}>Akan diterima pada tanggal 18-19 Juni</p>
                <a style={{  marginLeft: 'auto', color: '#757272' }}>Rp. 45.000</a>
            </div>
            <div>
                <div style={{ borderBottom: '2px solid black', marginTop:'50px'}}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px' }}>
                <p>Pesan</p>
                <a style={{ marginLeft: 'auto', color:'#757272' }}>Silahkan tinggalkan pesan disini </a>
            </div>
            <div>
                <div style={{ borderBottom: '2px solid black', marginTop:'50px'}}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px' }}>
                <p>Metode Pembayaran</p>
                <a>Metode Pembayaran E-Money - OVO</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '200px' }}>
                <p>Total Pesanan ( 1 Produk ) :</p>
                <a style={{ marginLeft: 'auto', color:'#757272' }}>Rp. 45.000</a>
            </div>
            <div style={{ marginTop :'50px' }}>
                <p>Rincian Pembayaran</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '25px' }}>
                <p style={{ color:'#757272' }}>Subtotal untuk produk</p>
                <a style={{ marginLeft: 'auto', color:'#757272' }}>Rp. 45.000</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '25px' }}>
                <p style={{ color:'#757272' }}>Subtotal Pengiriman</p>
                <a style={{ marginLeft: 'auto', color:'#757272' }}>Rp. 45.000</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '25px' }}>
                <p style={{ color:'#757272' }}>Biaya Layanan</p>
                <a style={{ marginLeft: 'auto', color:'#757272' }}>Rp. 45.000</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '25px' }}>
                <p style={{ color:'#757272' }}>Biaya Penanganan</p>
                <a style={{ marginLeft: 'auto', color:'#757272' }}>Rp. 45.000</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '25px' }}>
                <p >Total Pembayaran</p>
                <a style={{ marginLeft: 'auto', color:'#757272' }}>Rp. 45.000</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '200px' }}>
                <p style={{ backgroundColor: '#606C5D', color: 'white', padding: '10px', borderRadius: '5px', flex: 1, textAlign: 'center'}} >Total Pembayaran  : Rp.45.000</p>
                <a style={{ marginLeft: 'auto', backgroundColor: '#cbc4c4', padding: '10px',flex: 1, borderRadius: '5px', textDecoration: 'none', textAlign: 'center' }}>Buat Pesanan</a>
            </div>
        </div> 
        <br/>
    </Layout>
    <Footer/>
    </>
  );
};

export default Checkout;