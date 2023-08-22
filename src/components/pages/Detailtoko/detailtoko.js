import React from "react";
import Backbutton from '../Backbutton/backbutton';
import Footer from '../../main asset/Footer';
import { Row, Col, Typography, Divider } from "antd";
import {
  StarOutlined,
  MessageOutlined,
  ShoppingOutlined,
  TeamOutlined,
  InfoCircleOutlined,
  VerifiedOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const TokoDetail = () => {
  return (
    <>
    <Backbutton/>
    <br/>
    <div style={{ padding: "24px" }}>
      <Row gutter={24}>
        <Col span={8}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "2px solid #1890ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                marginBottom: "16px",
              }}
            >
              {/* Replace the src with the URL of your toko profile picture */}
              <img
                src="https://via.placeholder.com/150"
                alt="Profile Toko"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <Title level={4} style={{ marginBottom: "8px" }}>
              Nama Toko
            </Title>
            <Paragraph style={{ marginBottom: "8px" }}>Status Online</Paragraph>
            <Paragraph>Jumlah Follower</Paragraph>
          </div>
        </Col>
        <Col span={16}>
          <Title level={3}>Penilaian</Title>
          <Paragraph>
            Isi paragraf tentang penilaian toko di sini...
          </Paragraph>
          <Divider />
          <Title level={3}>Performa Chat</Title>
          <Paragraph>
            Isi paragraf tentang performa chat toko di sini...
          </Paragraph>
          <Divider />
          <Title level={3}>Produk</Title>
          <Paragraph>
            Isi paragraf tentang produk toko di sini...
          </Paragraph>
          <Divider />
          <Title level={3}>Bergabung</Title>
          <Paragraph>
            Isi paragraf tentang bergabung dengan toko di sini...
          </Paragraph>
          <Divider />
          <Title level={3}>Keterangan</Title>
          <Paragraph>
            Isi paragraf keterangan toko di sini...
          </Paragraph>
          <Divider />
          <Title level={3}>Tautan Toko</Title>
          <Paragraph>
            Isi paragraf tautan toko di sini...
          </Paragraph>
          <Divider />
          <Title level={3}>Status Akun</Title>
          <Paragraph>
            <VerifiedOutlined /> Terverifikasi
          </Paragraph>
        </Col>
      </Row>
    </div>
    <br/>
    <Footer />
    </>
  );
};

export default TokoDetail;