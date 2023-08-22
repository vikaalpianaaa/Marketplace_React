import React from "react";
import { Layout, Button } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const Backbutton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <Layout>
      <div
        style={{ 
          display: "flex",
          marginRight: "50px",  
          alignItems: "center",
          backgroundColor: "#FBD9C0",
          width: "100%",
          padding: "10px",
        }}
      >
        <Button
          type="text"
          style={{ marginRight: "10px" }}
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
        />
        <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}> Back </p>
      </div>
    </Layout>
  );

  
};

export default Backbutton;
