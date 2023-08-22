import React from "react";
import { Button, Form, Input, message, Card, Typography, Row, Col, Select } from 'antd';
import Image from "../Image/Registrasi.png";
import { Option } from "antd/es/mentions";


const { Title } = Typography;

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success('Submit success!');
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  const roleOptions = ["Mitra", "Umkm", "Konsumen"];

  return (
    <div className="login" style={{ backgroundColor: '#FBD9C0', height: '120vh', backgroundPosition: 'top' }}>
      <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Card style={{ width: '135%', maxWidth: 980, height: '640px' }}>

      <Row gutter={16}>
          <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <img src={Image} alt="registrasi" style={{ width: '125%', marginTop: '5px' }} />
              </div>
            </Col>

            <Col span={12}>
              <div style={{ paddingRight: '24px' }}>
                <br></br>
                <Title level={2}
                 style={{ textAlign: 'center' }}>Registrasi</Title>
                <br />
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  style={{ width: '120%' }}
                >
                  <Form.Item
                    name="username"
                    rules={[{ required: true }]}
                    style={{ maxWidth: 250, margin: '0 auto 15px' }}
                  >
                    <Input placeholder="Username" style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true }]}
                    style={{ maxWidth: 250, margin: '0 auto 15px' }}
                  >
                    <Input placeholder="Password" style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    name="nama"
                    rules={[{ required: true }]}
                    style={{ maxWidth: 250, margin: '0 auto 15px' }}
                  >
                    <Input placeholder="Nama" style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    name="tanggal lahir"
                    rules={[{ required: true }]}
                    style={{ maxWidth: 250, margin: '0 auto 15px' }}
                  >
                    <Input placeholder="Tanggal Lahir" style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    name="alamat"
                    rules={[{ required: true }]}
                    style={{ maxWidth: 250, margin: '0 auto 15px' }}
                  >
                    <Input placeholder="Alamat" style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    name="role"
                    style={{ maxWidth: 250, margin: '0 auto 15px' }}
                  >
                    <Select placeholder="Pilih Peran" style={{ width: '100%' }}>
                      {roleOptions.map((role) => (
                        <Option key={role} value={role}>
                          {role}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="provinsi"
                    rules={[{ required: true }]}
                    style={{ maxWidth: 250, margin: '0 auto 15px' }}
                  >
                    <Input placeholder="Provinsi" style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    name="kota"
                    rules={[{ required: true }]}
                    style={{ maxWidth: 250, margin: '0 auto 15px' }}
                  >
                    <Input placeholder="Kota" style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    name="Kabupaten"
                    rules={[{ required: true }]}
                    style={{ maxWidth: 250, margin: '0 auto 15px' }}
                  >
                    <Input placeholder="Kabupaten" style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    name="Kecamatan"
                    rules={[{ required: true }]}
                    style={{ maxWidth: 250, margin: '0 auto 15px' }}
                  >
                    <Input placeholder="Kecamatan" style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 10,
                      span: 20,
                      textAlign: 'center',
                    }}
                    style={{ margin: '0 auto' }}
                  >
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: '#606C5D' }}>
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default Login;
