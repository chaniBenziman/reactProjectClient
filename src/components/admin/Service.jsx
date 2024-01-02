import React from "react";
import { observer } from "mobx-react-lite";
import ServiceStore from "../../stores/ServiceStore";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const Services = observer(() => {
  return (
    <Stack spacing={2}>
      {ServiceStore.servicesList.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </Stack>
  );
});

const ServiceCard = ({ service }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {service.name}
        </Typography>
        <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>ID:</strong> {service.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Description:</strong> {service.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Price:</strong> {service.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Duration:</strong> {service.duration}
          </Typography>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default Services;