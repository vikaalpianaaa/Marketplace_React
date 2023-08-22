import React from 'react';
import { Card, Row, Col, Table, Image, Button } from 'antd';
import Backbutton from '../Backbutton/backbutton';
import Footer from '../../main asset/Footer';
import sempelImage from "../Image/sempel.png";
import capingImage from "../Image/Caping.png";
import dodolImage from "../Image/Dodol.png";
import lumpiaImage from "../Image/Lumpia.png";


const { Column } = Table;

const data = [
  { id: 1, price: 70000, quantity: 1 },
  { id: 2, price: 20000, quantity: 2 },
  { id: 3, price: 20000, quantity: 3 },
];

const App = () => (
  <>
  <Backbutton />
  <br />
  <Row justify="center" align="middle" style={{ height: '100vh' }}>
    <Col>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          style={{
            width: '80%', // Melebarkan card menjadi 100% dari lebar aslinya
            height: 675,
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h5>Keranjang Belanja</h5>
          <br/>
          <div style={{ display: 'flex' }}>
            {/* Tabel */}
            <Table dataSource={data} pagination={false} style={{ width: '50%', marginRight: '20px' }}>
              {/* Kolom */}
              <Column
                title="Item"
                dataIndex="item"
                key="item"
                width="30%"
                ellipsis={true}
                render={(text, record) =>
                  record.id === 1 ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image width={80} src={sempelImage} />
                      <span style={{ marginLeft: '15px' }}>Bandeng</span>
                    </div>
                  ) : record.id === 2 ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image width={80} src={dodolImage} />
                      <span style={{ marginLeft: '15px' }}>Dodol</span>
                    </div>
                  ) : record.id === 3 ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Image width={80} src={lumpiaImage} />
                      <span style={{ marginLeft: '15px' }}>Lumpia</span>
                    </div>
                  ) : (
                    <span>{text}</span>
                  )
                }
              />

              <Column
                title="Harga"
                dataIndex="price"
                key="price"
                align="right"
                width={50}
                render={(text) => (
                  <span>{text.toLocaleString()}</span>
                )}
              />
              <Column
                title="Jumlah"
                dataIndex="quantity"
                key="quantity"
                align="right"
                width={50}
              />
              <Column
                title="Total"
                key="total"
                width="25%"
                align="right"
                render={(text, record) => (
                  <span>{record.price * record.quantity}</span>
                )}
              />
            </Table>
            <Card
            style={{
              width: '50%', // Melebarkan card menjadi 50% dari lebar aslinya
              height: '100%',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
              marginLeft: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '16px', 
            }}
          >
            <div>
              <h5>Apakah kamu punya voucher?</h5>
            </div>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
             <Button type="" style={{ width: '272px', color: 'black', fontWeight: 'bold', border: '1px solid black', marginRight: '10px' }}>Masukan Kode</Button>
              <Button type="" style={{ width: '272px', background: 'black', fontWeight: 'bold', color: 'white' }}>Redeem</Button>
            </div>
            <br/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
              <div>
                <p style={{ margin: '0' }}>Subtotal</p>
                <p style={{ margin: '0' }}>Total</p>
              </div>
              <div>
                <p style={{ margin: '0', textAlign: 'right' }}>Rp.100.00</p>
                <p style={{ margin: '0', textAlign: 'right' }}>Rp.150.00</p>
              </div>
            </div>
            <br/>
            <Button type="primary" style={{ width: '513px', background: 'black', color: 'white', fontWeight: 'bold' }}>checkout</Button>
          </div>
          </Card>
          </div>
          <br/>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Col>
            <h5 style={{ textAlign: 'center', marginBottom: '3px' }}>Terakhir Dilihat</h5>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Card.Grid style={{ width: '110px', height: '150px', textAlign: 'center', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={sempelImage} alt="Sempel" style={{ width: '160%', height: '100%', objectFit: 'cover' }} />
                <span style={{ marginTop: '8px' }}>Sempel</span>
              </Card.Grid>
              <Card.Grid style={{ width: '110px', height: '150px', textAlign: 'center', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={capingImage} alt="Caping" style={{ width: '160%', height: '100%', objectFit: 'cover' }} />
                <span style={{ marginTop: '8px' }}>Caping</span>
              </Card.Grid>
              <Card.Grid style={{ width: '110px', height: '150px', textAlign: 'center', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={dodolImage} alt="Dodol" style={{ width: '160%', height: '100%', objectFit: 'cover' }} />
                <span style={{ marginTop: '8px' }}>Dodol</span>
              </Card.Grid>
              <Card.Grid style={{ width: '110px', height: '150px', textAlign: 'center', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={lumpiaImage} alt="Lumpia" style={{ width: '160%', height: '100%', objectFit: 'cover' }} />
                <span style={{ marginTop: '8px' }}>Lumpia</span>
              </Card.Grid>
            </div>
        </Col>
        </div>
        </Card>
      </div>
    </Col>
  </Row>
  <br/>
  <Footer />
  </>
);

export default App;
