// src/pages/About.tsx
import React, { useState } from 'react';
import Button from '../components/button/Button';

const Home = () => {
  const handleBtnClick = () => {
    console.log("hello world")
  }
  const [isOn, setIsOn] = useState(true)
  return (
    <div>
      <h1>Home</h1>
      <p>Đây là trang Home.</p>
      <p>
        <Button value='Primary' />
        <Button value='Primary Soft' size='small' />
        <Button value='Primary Soft' size='large' />
        <Button value='Primary Outline' variant='outlined' />
        <Button value='Primary Outline' variant='outlined' shape='round' />
        <Button value='Primary rounded' shape='round' />
        <Button value='Primary Soft' variant='outlined' />
      </p>
      <p>
        <Button value='Secondary' type='secondary' />
        <Button value='Secondary Outline' type='secondary' variant='outlined' />
        <Button value='Secondary Outline' type='secondary' shape='round' variant='outlined' />
        <Button value='Secondary rounded' type='secondary' />
        <Button value='Secondary Soft' variant='outlined' type='secondary' />
      </p>
      <p>
        <Button value='success' type='success' />
        <Button value='success Outline' type='success' variant='outlined' />
        <Button value='success Outline' type='success' shape='round' variant='outlined' />
        <Button value='success rounded' type='success' />
        <Button value='success Soft' variant='outlined' type='secondary' />
      </p>
      <p>
        <Button value='danger' type='danger' />
        <Button value='danger Outline' type='danger' variant='outlined' />
        <Button value='danger Outline' type='danger' shape='round' variant='outlined' />
        <Button value='danger rounded' type='danger' />
        <Button value='danger Soft' variant='outlined' type='secondary' />
      </p>
      <p>
        <Button value='info' type='info' />
        <Button value='info Outline' type='info' variant='outlined' />
        <Button value='info Outline' type='info' shape='round' variant='outlined' />
        <Button value='info rounded' type='info' />
        <Button value='info Soft' variant='outlined' type='secondary' />
      </p>
      <p>
        <Button value='warning' type='warning' />
        <Button value='warning Outline' type='warning' variant='outlined' />
        <Button value='warning Outline' type='warning' shape='round' variant='outlined' />
        <Button value='warning rounded' type='warning' />
        <Button value='warning Soft' variant='outlined' type='secondary' />
      </p>
      <p>
        <Button value='light' type='light' />
        <Button value='light Outline' type='light' variant='outlined' />
        <Button value='light Outline' type='light' shape='round' variant='outlined' />
        <Button value='light rounded' type='light' />
        <Button value='light Soft' variant='outlined' type='secondary' />
      </p>
      <p>
        <Button value='dark' type='dark' />
        <Button value='dark Outline' type='dark' variant='outlined' />
        <Button value='dark Outline' type='dark' shape='round' variant='outlined' />
        <Button value='dark rounded' type='dark' />
        <Button value='dark Soft' variant='outlined' type='secondary' />
      </p>

      <Button
        icon={<p className="fa fa-plus" style={{ margin: '0px', height: 'fit-content' }} >icon ne</p>}
        value="Thêm mới"
      />
      <Button
        disabled={true}
        value="disable"
      />
      <p>
        <Button value='Ative' />
        <Button value='Primary Soft' size='small' />
        <Button value='Primary Soft' size='large' />
        <Button value='Primary Outline' variant='outlined' />
        <Button value='Primary Outline' variant='outlined' shape='round' />
        <Button value='Primary rounded' shape='round' />
        <Button value='Primary Soft' variant='outlined' />
      </p>
      <Button
        isToggle
        value="Self Toggle"
      />
      <Button
        type='primary'
        isToggle
        value="Self Toggle"
      />

      <Button
        isToggle
        value="Toggle Me"
        toggled={isOn}
        onToggleChange={(newState) => setIsOn(newState)}
      />
      <div>  <Button
        isToggle
        variant='outlined'
        value="Self Toggle"
      />
        <Button isToggle icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-1-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z" />
        </svg>} />
        <Button isToggle icon={<a>ss</a>} />
      </div>
    </div>
  );
};

export default Home;
