import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardActions } from '@mui/material';
import BusinessDataStore from '../../stores/BusinessDataStore';



export default function businessData() {
    const business=BusinessDataStore.business;
  
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={business.logo}
                        alt="logo"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {business.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {business.address}
                            <br />
                            {business.phone}
                            <br />
                            {business.owner}
                            <br />
                            {business.description}
                            <br />
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
            </Card>
        </>
    )

}