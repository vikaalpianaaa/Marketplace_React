import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Carousel, Card,Space, Input, Alert} from 'antd';
import logo from "../Image/Logo.png"
import '@fontsource/poppins';
import { SearchOutlined } from '@ant-design/icons';
import keranjang from "../Image/keranjang.png";
import iklan1 from "../Image/iklan1.png";
import iklan2 from "../Image/iklan2.png";
import produk1 from "../Image/produk1.png";
import rekomendasi1 from "../Image/rekomendasi 1.png";
import rekomendasi2 from "../Image/rekomendasi 2.png";
import rekomendasi3 from "../Image/rekomendasi 3.png";
import rekomendasi4 from "../Image/rekomendasi 4.png";
import rekomendasi5 from "../Image/rekomendasi 5.png";
import tambahkeranjang from "../Image/tambahkeranjang.png";
import bintang from "../Image/Star.png";
import Footer from '../../main asset/Footer';



const { Search } = Input;

const { Content,  } = Layout;
const { Meta } = Card;

const Home = () => {
  const menuStyle = {
    backgroundColor: '#FBD9C0',
    color: '#000000',
    fontSize: '16px',
    paddingTop:'11px',
    fontFamily:'Poppins',
    fontWeight: 'Bold',
    paddingLeft:'10px',
  };

  const onSearch = (value) => {
    console.log(value); // Tambahkan logika pencarian sesuai kebutuhan
  };

  return (
    <Layout>
        <Menu style={menuStyle} mode="horizontal">
        <Space><img src={logo} style={{width:'70px', paddingTop:'4px'}} ></img></Space>
          <Menu.Item key="1">Beranda</Menu.Item>
          <Menu.Item key="2">Produk</Menu.Item>
          <Menu.Item key="3">Kategori</Menu.Item>
          <Menu.Item key="4">Tentang ASPOO</Menu.Item>
          <Menu.Item key="5" style={{ paddingLeft: '350px' }}>
          <Search style={{ padding:'10px'}} placeholder="Cari produk" onSearch={onSearch} enterButton={<SearchOutlined />} />
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/keranjangbelanja">
              <img src={keranjang} style={{ width: '25px', paddingTop: '10px' }} alt="Keranjang" />
            </Link>
          </Menu.Item>
          <Menu.Item key="7" style={{color:'#757272'}}>Jadi Mitra</Menu.Item>
          <Menu.Item key="8" style={{ color: '#757272' }}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="9" style={{color:'#757272'}}>|</Menu.Item>
          <Menu.Item key="10" style={{ color: '#757272' }}>
            <Link to="/registrasi">Daftar</Link>
          </Menu.Item>

        </Menu>
      <Content>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Carousel autoplay autoplaySpeed={2000}>
          <div>
            <img src={iklan1} alt="Iklan 1" style={{ width: '800px', justifyContent:'center', marginLeft:'350px', marginTop:'50px', paddingBottom:'50px'}}/>
          </div>
          <div>
            <img src={iklan2} alt="Iklan 1" style={{ width: '800px', height: '500px', justifyContent:'center', marginLeft:'350px', marginTop:'50px', paddingBottom:'50px'}}/>
          </div>
        </Carousel>
          <Card title="Produk Terpopuler" style={{ width: '100%' }}>
            <Card.Grid style={{ width: '33%', textAlign: 'center' }}>
              <img src={produk1} alt="produk1" />
              <h2>Produk 1</h2>
            </Card.Grid>
            <Card.Grid style={{ width: '33%', textAlign: 'center' }}>
              <img src={produk1} alt="produk1" />
              <h2>Produk 2</h2>
            </Card.Grid>
            <Card.Grid style={{ width: '33%', textAlign: 'center' }}>
              <img src={produk1} alt="produk1" />
              <h2>Produk 3</h2>
            </Card.Grid>
          </Card>
        </div>
        <section style={{ backgroundColor : '#fff' }}>
          <div>
            <h2 style= {{marginLeft : '48px' }}>Rekomendasi </h2>
          </div>
          <div style={{display: 'flex', alignitems : 'center', marginTop :'5px'}}>
            <Card // Card 1
                hoverable
                style={{width: 270, marginLeft :'50px', marginTop : '40px'}}
                cover={<img alt="rekomendasi1" src={rekomendasi1} />}>
                <Meta title="Dodol Garut Cap Mutiara"/>
                <p style={{opacity : '60%', marginTop : '5px'}}>Makanan</p>
                <div style={{display: 'flex', alignitems : 'center'}}>
                <img src={bintang} alt='rating'></img>
                <p>  3.9 | 43 Ulasan</p>
                </div>
                <p>Rp 7.500</p>
                <div style={{display: 'flex', alignitems : 'center', marginTop :'5px'}}>
                  <p style={{ backgroundColor:'#FFC6C6', backgroundSize: '4px 10px' }}>25%</p>
                  <p style={{ marginLeft : '10px', textDecoration: 'line-through' }}>Rp 10.000</p>
                </div>
                <div style={{display: 'flex', alignitems : 'center',}}>
                  <p style={{opacity : '60%', marginTop : '5px'}}>Semarang Tengah</p>
                  <img style={{ marginLeft :'40px' }} src={tambahkeranjang} alt=''></img>
                </div>
            </Card>
            <Card // Card 2
                hoverable
                style={{ width: 270, marginLeft: '30px', marginTop: '40px' }}
                cover={<img alt="rekomendasi5" src={rekomendasi5} />}
              >
                <Link to="/detailproduct">
                  <Meta title="Bandeng Presto Juwana" />
                </Link>
                <p style={{opacity : '60%', marginTop : '5px'}}>Makanan</p>
                <div style={{display: 'flex', alignitems : 'center'}}>
                <img src={bintang} alt='rating'></img>
                <p>  4.9 | 50 Ulasan</p>
                </div>
                <p>Rp 75.000</p>
                <div style={{display: 'flex', alignitems : 'center', marginTop :'5px'}}>
                  <p style={{ backgroundColor:'#FFC6C6', backgroundSize: '4px 10px' }}>25%</p>
                  <p style={{ marginLeft : '10px', textDecoration: 'line-through' }}>Rp 10.000</p>
                </div>
                <div style={{display: 'flex', alignitems : 'center',}}>
                  <p style={{opacity : '60%', marginTop : '5px'}}>Pati</p>
                  <img style={{ marginLeft :'110px' }} src={tambahkeranjang} alt=''></img>
                </div>
            </Card>
            <Card // Card 3
                hoverable
                style={{width: 270, marginLeft :'30px', marginTop : '40px'}}
                cover={<img alt="rekomendasi4" src={rekomendasi4} />}>
                <Meta title="Caping Guwang"/>
                <p style={{opacity : '60%', marginTop : '5px'}}>Kerajinan</p>
                <div style={{display: 'flex', alignitems : 'center'}}>
                <img src={bintang} alt='rating'></img>
                <p>  4.9 | 50 Ulasan</p>
                </div>
                <p>Rp 17.500</p>
                <div style={{display: 'flex', alignitems : 'center', marginTop :'5px'}}>
                  <p style={{ backgroundColor:'#FFC6C6', backgroundSize: '4px 10px' }}>25%</p>
                  <p style={{ marginLeft : '10px', textDecoration: 'line-through' }}>Rp 20.000</p>
                </div>
                <div style={{display: 'flex', alignitems : 'center',}}>
                  <p style={{opacity : '60%', marginTop : '5px'}}>Semarang Timur</p>
                  <img style={{ marginLeft :'20px' }} src={tambahkeranjang} alt=''></img>
                </div>
            </Card>
            <Card // Card 4
                hoverable
                style={{width: 270, marginLeft :'30px', marginTop : '40px'}}
                cover={<img alt="rekomendasi2" src={rekomendasi2} />}>
                <Meta title="Lumpia Khas Semarang"/>
                <p style={{opacity : '60%', marginTop : '5px'}}>Makanan</p>
                <div style={{display: 'flex', alignitems : 'center'}}>
                <img src={bintang} alt='rating'></img>
                <p>  4.9 | 50 Ulasan</p>
                </div>
                <p>Rp 11.250</p>
                <div style={{display: 'flex', alignitems : 'center', marginTop :'5px'}}>
                  <p style={{ backgroundColor:'#FFC6C6', backgroundSize: '4px 10px' }}>25%</p>
                  <p style={{ marginLeft : '10px', textDecoration: 'line-through' }}>Rp 15.000</p>
                </div>
                <div style={{display: 'flex', alignitems : 'center',}}>
                  <p style={{opacity : '60%', marginTop : '5px'}}>Semarang Timur</p>
                  <img style={{ marginLeft :'20px' }} src={tambahkeranjang} alt=''></img>
                </div>
            </Card>
            <Card // Card 5
                hoverable
                style={{width: 270, marginLeft :'30px', marginTop : '40px'}}
                cover={<img alt="rekomendasi3" src={rekomendasi3} />}>
                <Meta title="Caping Guwang"/>
                <p style={{opacity : '60%', marginTop : '5px'}}>Kerajinan</p>
                <div style={{display: 'flex', alignitems : 'center'}}>
                <img src={bintang} alt='rating'></img>
                <p>  4.9 | 50 Ulasan</p>
                </div>
                <p>Rp 37.500</p>
                <div style={{display: 'flex', alignitems : 'center', marginTop :'5px'}}>
                  <p style={{ backgroundColor:'#FFC6C6', backgroundSize: '4px 10px' }}>25%</p>
                  <p style={{ marginLeft : '10px', textDecoration: 'line-through' }}>Rp 50.000</p>
                </div>
                <div style={{display: 'flex', alignitems : 'center',}}>
                  <p style={{opacity : '60%', marginTop : '5px'}}>Semarang Tengah</p>
                  <img style={{ marginLeft :'20px' }} src={tambahkeranjang} alt=''></img>
                </div>
            </Card>
          </div>
        </section>
      </Content>
      <Footer />
      <p>Marketplace ©2023 Created by You</p>
    </Layout>
  );
};

export default Home;
