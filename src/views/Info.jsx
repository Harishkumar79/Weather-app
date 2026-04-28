import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../../public/css/info.css";

export default function Info() {
    let demoImg = "https://images.unsplash.com/photo-1561553873-e8491a564fd0?q=80&w=1247&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    let info = {
        city: "sirohi",
        temp: 30,
        tempmin: 29,
        tempmax: 32,
        humidity: 32,
        feelslike: 28.8,
        weather: "clear sky"
    }

    return (
        <div className='infoContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={demoImg}
                    title="weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Weather Info - {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temp : {info.temp}&deg;C</p>
                        <p>Max Temp : {info.tempmax}&deg;C</p>
                        <p>Min Temp : {info.tempmin}&deg;C</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>Current {info.city} weather is {info.weather} and feels like {info.feelslike}</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}