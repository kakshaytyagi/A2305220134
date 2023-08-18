import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TrainCard({ train }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{train.trainName}</Typography>
        {/* Display other train information */}
        <Link to={`/train/${train.trainNumber}`}>View Details</Link>
      </CardContent>
    </Card>
  );
}

export default TrainCard;
