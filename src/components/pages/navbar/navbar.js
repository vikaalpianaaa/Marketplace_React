import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu,Space, Input} from 'antd';
import logo from "../Image/Logo.png"
import '@fontsource/poppins';
import { SearchOutlined } from '@ant-design/icons';
import keranjang from "../Image/keranjang.png";



const { Search } = Input;

const Navbar = () => {
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
          <Menu.Item key="1"><Link to="/">Beranda</Link></Menu.Item>
          <Menu.Item key="2">Produk</Menu.Item>
          <Menu.Item key="3">Kategori</Menu.Item>
          <Menu.Item key="4">Tentang ASPOO</Menu.Item>
          <Menu.Item key="5" style={{ paddingLeft: '350px' }}>
          <Search style={{ padding:'10px'}} placeholder="Cari produk" onSearch={onSearch} enterButton={<SearchOutlined />} />
          </Menu.Item>
          <Menu.Item key="6"> <Link to="cart"><img src={keranjang} style={{width:'25px', paddingTop:'10px'}} ></img></Link></Menu.Item>
          <Menu.Item key="7" style={{color:'#757272'}}>Jadi Mitra</Menu.Item>
          <Menu.Item key="8" style={{color:'#757272'}}><Link to="login">Login</Link></Menu.Item>
          <Menu.Item key="9" style={{color:'#757272'}}>|</Menu.Item>
          <Menu.Item key="10" style={{color:'#757272'}}><Link to="registrasi">Daftar</Link></Menu.Item>
        </Menu>

    </Layout>
  );
};

export default Navbar;
