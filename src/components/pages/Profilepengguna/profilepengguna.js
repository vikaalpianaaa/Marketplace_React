import React, { useState } from "react";
import Navbar from '../navbar/navbar';
import Footer from '../../main asset/Footer';
import { Row, Col, Form, Input, Select, Button, Upload, message, DatePicker } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined, CalendarOutlined } from "@ant-design/icons";

const { Option } = Select;

const Profile = () => {
  
  const [userData, setUserData] = useState({
    username: "",
    nama: "",
    email: "",
    nomorTelepon: "",
    alamat: "",
    tanggalLahir: null,
    jenisKelamin: "",
    foto: null,
  });

  const handleChange = (name, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date, dateString) => {
    handleChange("tanggalLahir", dateString);
  };

  const handleSubmit = (values) => {
    // Lakukan sesuatu dengan data pengguna yang disubmit, misalnya mengirim ke server
    console.log(values);
    message.success("Data pengguna berhasil disubmit");
  };

  const handleUpload = (file) => {
    setUserData((prevData) => ({
      ...prevData,
      foto: file,
    }));
    return false;
  };

  const { username, nama, email, nomorTelepon, alamat, tanggalLahir, jenisKelamin } = userData;

  return (
    <>
    <Navbar />
    <div style={{ padding: "24px" }}>
      <h1>Profile Pengguna</h1>
      <br/>
      <Row gutter={24}>
        <Col span={12}>
          <Form onFinish={handleSubmit} initialValues={userData}>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: "Masukkan username" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                onChange={(e) => handleChange("username", e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="nama"
              label="Nama"
              rules={[{ required: true, message: "Masukkan nama" }]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Nama"
                onChange={(e) => handleChange("nama", e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Masukkan email" },
                { type: "email", message: "Format email salah" },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="nomorTelepon"
              label="Nomor Telepon"
              rules={[{ required: true, message: "Masukkan nomor telepon" }]}
            >
              <Input
                prefix={<PhoneOutlined />}
                placeholder="Nomor Telepon"
                onChange={(e) => handleChange("nomorTelepon", e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="alamat"
              label="Alamat"
              rules={[{ required: true, message: "Masukkan alamat" }]}
            >
              <Input
                prefix={<HomeOutlined />}
                placeholder="Alamat"
                onChange={(e) => handleChange("alamat", e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="tanggalLahir"
              label="Tanggal Lahir"
              rules={[{ required: true, message: "Pilih tanggal lahir" }]}
            >
              <DatePicker
                style={{ width: "100%" }}
                placeholder="Pilih Tanggal"
                format="MM-DD-YY"
                onChange={handleDateChange}
              />
            </Form.Item>
            <Form.Item
              name="jenisKelamin"
              label="Jenis Kelamin"
              rules={[{ required: true, message: "Pilih jenis kelamin" }]}
            >
              <Select
                placeholder="Pilih Jenis Kelamin"
                onChange={(value) => handleChange("jenisKelamin", value)}
              >
                <Option value="Laki-laki">Laki-laki</Option>
                <Option value="Perempuan">Perempuan</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Simpan
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <h2>Foto Profile</h2>
          <Upload
            name="foto"
            accept="image/"
            beforeUpload={handleUpload}
            showUploadList={false}
          >
            {userData.foto ? (
              <img
                src={URL.createObjectURL(userData.foto)}
                alt="Profile Picture"
                style={{ width: "200px", height: "200px" }}
              />
            ) : (
              <div style={{ width: "200px", height: "200px", border: "1px dashed #ccc" }}>
                <div style={{ textAlign: "center", marginTop: "80px" }}>
                  Klik atau seret file ke sini untuk mengunggah
                </div>
              </div>
            )}
          </Upload>
        </Col>
      </Row>
    </div>
    <br/>
    <Footer />
    </>
  );
};

export default Profile;