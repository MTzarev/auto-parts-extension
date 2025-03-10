import React, { useState, useEffect } from 'react';
import './PartDetails.css';

const PartDetails = ({ articleNumber, setError }) => {
  const [partInfo, setPartInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!articleNumber) return;  // Ако няма номер, не правим заявка

    setLoading(true);
    setError(null); // нулираме всяка грешка, ако има

    fetch(`https://auto-parts-catalog.p.rapidapi.com/articles/article-number-details/lang-id/4/country-filter-id/62/article-no/${articleNumber}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'auto-parts-catalog.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching part details');
        }
        return response.json();
      })
      .then((data) => {
        setPartInfo(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [articleNumber, setError]);

  if (loading) return <div>Loading...</div>;
  if (!partInfo) return <div>No part details available</div>;

  return (
    <div className="part-info">
      <h2>Part Details</h2>
      <p><strong>Part Name:</strong> {partInfo.partName}</p>
      <p><strong>Brand:</strong> {partInfo.brand}</p>
      <p><strong>Price:</strong> {partInfo.price}</p>
    </div>
  );
};

export default PartDetails;