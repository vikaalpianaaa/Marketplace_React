import React, { useState } from 'react';
import { Button, Table } from 'antd';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const columns = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, item) => (
        <Button onClick={() => removeFromCart(item)}>Remove</Button>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
    },
    // Add more product data as needed
  ];

  return (
    <div>
      <h1>Keranjang Belanja</h1>
      <Table columns={columns} dataSource={cartItems} />

      <h2>Available Products</h2>
      <Table columns={columns} dataSource={data} />

      <Button onClick={() => addToCart(data[0])}>Add to Cart</Button>
    </div>
  );
};

export default ShoppingCart;