// src/pages/About.tsx
import React from 'react';
import Button from '../components/button/Button';

const Home = () => {
  const handleBtnClick = () => {
    console.log("hello world")
  }
  return (
    <div>
      <h1>Home</h1>
      <p>Đây là trang Home.</p>
      <Button value='Primary' onClick={handleBtnClick} /><p></p>
      <Button value='Primary Outline' onClick={handleBtnClick} />
    </div>
  );
};

export default Home;
