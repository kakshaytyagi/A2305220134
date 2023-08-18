import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios.get('/train/trains') // Replace with your API endpoint
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  return (
    <div>
      <h1>All Trains Schedule</h1>
      {trains.map(train => (
        <Card key={train.trainNumber} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {train.trainName}
            </Typography>
            <Typography variant="body2">
              Train Number: {train.trainNumber}
            </Typography>
            {/* Add more train details here */}
            <Link to={`/train/${train.trainNumber}`}>
              <Button variant="contained" color="primary">
                View Details
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AllTrainsPage;
