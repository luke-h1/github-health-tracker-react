import React, { useState, useEffect } from 'react';
import './Status.scss';
import axios from 'axios';
import Loading from '../Loading/Loading';

import Card from '../Card/Card';
const Status = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchGhData();
  }, []);

  const fetchGhData = async () => {
    setLoading(true);
    const API_URL = `https://kctbh9vrtdwd.statuspage.io/api/v2/components.json`;
    const res = await axios.get(API_URL);
    console.log(res);
    console.log(res.data.components);
    const results = res.data.components.map((stat) => (
      <Card
        component={stat.component}
        name={stat.name}
        status={stat.status}
        key={stat.id}
        description={stat.description}
        updatedAt={stat.updated_at}
      />
    ));
    setData(results);
    setLoading(false);
  };

  return (
    <>
    {loading && <Loading />}
      <div className="status-wrapper">{data ? data : null}</div>
    </>
  );
};

export default Status;
