import React, { useState } from 'react';
import { Image, Row, Col, Button, Card, Rate, Avatar } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import sempelImage from "../Image/sempel.png";
import '@fontsource/poppins';
import Backbutton from '../Backbutton/backbutton';
import Footer from '../../main asset/Footer';

const Detail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    console.log('Item added to cart');
  };

  return (
    <>
      <Backbutton />
      <br />
      <Row style={{ marginTop: '10px', marginLeft: '80px', alignItems: 'center' }}>
        <Col flex="none">
          <Image width={370} src={sempelImage} /> 
        </Col>
        <Col flex="auto" style={{ marginLeft: '10px', paddingLeft: '40px', marginRight: '20px' }}>
          <h2 style={{ fontWeight: 'bold', marginTop: '70px', marginBottom: 0 }}>Bandeng Presto Juwana</h2>
          <p style={{ marginTop: '10px' }}>Rp 100.000,-</p>
          <br />
          <h4 style={{ margin: 0 }}>Detail</h4>
          <br />
          <p style={{ margin: 0 }}>
            Oleh-oleh dari Semarang yang khas banget BANDENG PRESTO ASLI<br /> JUWANA Vacuum Basah.
            <br />
            Berat kotor ikan per 1 dus dengan sambal, vacuum, dll = 1 KG.
            <br/>
            Sudah termasuk sambal di dalam.
            <br />
            <br />
            Ketahanan 5 hari di luar ruangan, tahan 1 bulan di dalam Freezer.<br />
            Langsung goreng pakai telur rasanya enak banget.
          </p>
          <br/>
          <Card style={{ marginTop: '2px', width: '230px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginTop: '5px' }}>
            <Button onClick={handleDecrement}>-</Button>
            <span style={{ margin: '5px' }}>{quantity}</span>
            <Button onClick={handleIncrement}>+</Button>
          </div>
          <div style={{ marginTop: '5px' }}>
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              onClick={handleAddToCart}
              style={{ marginTop: '4px' }}
            >
              Add to Cart
            </Button>
          </div>
        </Card>
        </Col>
      </Row>
      <Row justify="start" style={{ marginTop: '18px' }}>
        <Col span={4} offset={1}>
          <Card style={{ width: 300, fontWeight: 'bold', marginLeft: '10px' }}>
            <Row align="middle">
              <Col flex="none">
                <Avatar size={30} src="/path/to/profile.jpg" />
              </Col>
              <Col flex="auto" style={{ marginLeft: '10px' }}>
                <p>OLEH - OLEH KHAS SEMARANG</p>
              </Col>
            </Row>
            <Rate defaultValue={4} />
          </Card>
        </Col>
      </Row>
      <br/>
      <Footer />
    </>
  );
};

export default Detail;
