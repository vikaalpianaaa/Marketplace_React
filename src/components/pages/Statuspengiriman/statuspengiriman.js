import React from "react";
import Backbutton from '../Backbutton/backbutton';
import Footer from '../../main asset/Footer';
import { Row, Col, Typography, Timeline, Image, Divider } from "antd";

const { Title, Paragraph } = Typography;

const StatusPengiriman = () => {
  return (
    <>
    <Backbutton/>
    <br/>
    <div style={{ padding: "24px" }}>
      <Row gutter={24} style={{ background: "#f0f0f0", padding: "16px" }}>
        <Col span={6}>
          <Image
            src="https://via.placeholder.com/150"
            alt="Foto Produk"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Col>
        <Col span={18}>
          <Paragraph>
            Keterangan Produk:<br />
            Produk telah diterima pada tanggal 17 Juli 2023<br />
            Produk dikirimkan menggunakan J&T Express Reguler
          </Paragraph>
        </Col>
      </Row>
      <Divider />
      <Row gutter={24} style={{ padding: "16px" }}>
        <Col span={24}>
          <Paragraph>Nomor Resi Produk: <h3>1234567890</h3></Paragraph>
        </Col>
      </Row>
      <Divider />
      <Row gutter={24} style={{ padding: "16px" }}>
        <Col span={24}>
          <Title level={3}>Status Pengiriman</Title>
          <Timeline>
            <Timeline.Item color="gray">Pesanan diproses oleh penjual</Timeline.Item>
            <Timeline.Item color="gray">Pesanan dalam proses pengepakan</Timeline.Item>
            <Timeline.Item color="blue">Pesanan telah dikirimkan</Timeline.Item>
            <Timeline.Item color="blue">Pesanan dalam perjalanan</Timeline.Item>
            <Timeline.Item color="green">Pesanan telah sampai pada lokasi</Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </div>
    <br/>
    <Footer/>
    </>
  );
};

export default StatusPengiriman;