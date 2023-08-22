import React, { useState } from "react";
import Footer from '../../main asset/Footer';
import Backbutton from '../Backbutton/backbutton';
import { Row, Col, Typography, Rate, List, Avatar, Divider } from "antd";

const { Title } = Typography;

const RatingUlasan = () => {
  
  const ulasanData = [
    {
      nama: "Naufal Nabil",
      rating: 5,
      komentar: "Ulasan dari Customer dengan rating 5 bintang. Semangat sidang semuanya dan goodluck untuk kalian semua!",
    },
    {
      nama: "Ilyas Kurnia",
      rating: 5,
      komentar: "Ulasan dari Customer dengan rating 5 bintang. Terima kasih Pak Farikh udah jadi pembimbing kita selama satu semester ini di CoE. Terima kasih Mas Hasan udah jaga lab terus.",
    },
    // Tambahkan dummy data ulasan sebanyak yang diinginkan
    // Berikan dummy data pada ulasan sebanyak 20 - 50 kata
    {
      nama: "Sutejo Suprapto",
      rating: 3,
      komentar:
        "Ulasan dari Customer dengan rating 3 bintang. Ulasan ini berisi dummy data dengan lebih dari 20 kata. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor elit eget enim luctus, vitae bibendum eros aliquet. Proin blandit sapien vitae lorem tempor, in hendrerit nisl scelerisque. Fusce convallis pharetra odio quis varius. Sed quis consequat quam. Donec eu bibendum libero, sit amet dapibus lorem. Maecenas vel fermentum odio. Nam bibendum semper metus, eget aliquet massa consectetur vitae. Donec nec metus eget nunc sollicitudin bibendum in nec justo. Quisque euismod varius ultrices. Suspendisse non est eu justo interdum volutpat. Suspendisse euismod pharetra leo. Sed congue leo ut hendrerit tempor.",
    },
    {
      nama: "Indah Permatasari",
      rating: 4,
      komentar:
        "Ulasan dari Customer dengan rating 4 bintang."
    },
    {
      nama: "Radliyan Galies",
      rating: 1,
      komentar: "Ulasan dari Customer dengan rating 1 bintang.",
    },

    {
      nama: "John Dune",
      rating: 2,
      komentar: "Ulasan dari Customer dengan rating 2 bintang.",
    },
  ];

  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const renderRatingStars = (count) => {
    const stars = "★".repeat(count);
    return <span>{stars}</span>;
  };

  return (
    <>
    <Backbutton />
    <br />
    <div style={{ padding: "24px" }}>
      <Row gutter={24} justify="center">
        {[5, 4, 3, 2, 1].map((rating) => (
          <Col key={rating}>
            <div
              onClick={() => handleRatingClick(rating)}
              style={{
                width: "40px",
                height: "40px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                marginBottom: "8px",
                cursor: "pointer",
                background: selectedRating === rating ? "#1890ff" : "none",
                color: selectedRating === rating ? "#fff" : "inherit",
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                {rating}
                {" "}
                <span style={{ fontSize: "12px", marginLeft: "2px" }}>★</span>
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              {ulasanData.filter((item) => item.rating === rating).length} ulasan
            </div>
          </Col>
        ))}
      </Row>
      <Divider />
      <Row gutter={24}>
        <Col span={24}>
          <Title level={3}>Ulasan Customer</Title>
          <List
            itemLayout="horizontal"
            dataSource={ulasanData.filter((item) => item.rating === selectedRating)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar>{item.nama.charAt(0).toUpperCase()}</Avatar>}
                  title={<div>{item.nama}</div>}
                  description={
                    <>
                      <div style={{ marginBottom: "8px" }}>
                        {renderRatingStars(item.rating)}
                      </div>
                      <div style={{ background: "#f0f0f0", padding: "8px" }}>
                        <p>{item.komentar}</p>
                      </div>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
    <br/>
    <Footer/>
    </>
  );
};

export default RatingUlasan;