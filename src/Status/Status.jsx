import React, { useState, useEffect } from 'react';
import './Status.scss';
import Card from '../Card/Card';
const Status = () => {
  return (
    <>
      <div className="status-wrapper">
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
      </div>
    </>
  );
};
export default Status;
