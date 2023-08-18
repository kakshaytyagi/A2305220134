import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const SingleTrainPage = () => {
  const { trainNumber } = useParams();
  const [trainDetails, setTrainDetails] = useState(null);

  useEffect(() => {
    axios.get(`/train/trains/${trainNumber}`) // Replace with your API endpoint
      .then(response => {
        setTrainDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching train details:', error);
      });
  }, [trainNumber]);

  return (
    <div>
      <h1>Train Details</h1>
      {trainDetails && (
        <Card>
          <CardContent>
            <Typography variant="h6" component="div">
              {trainDetails.trainName}
            </Typography>
            <Typography variant="body2">
              Train Number: {trainDetails.trainNumber}
            </Typography>
            {/* Display more train details */}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SingleTrainPage;
