import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../../public/css/info.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Info({ info }) {

    const Cold_Url = "https://th.bing.com/th/id/R.515032532e698697ae8c5813796468fc?rik=LCDb7uyG262iDg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-mmBeYIaifyY%2fWGz2qcu6iAI%2fAAAAAAAPBYQ%2fdFK2U3-L2mAgIkkX2XHb3g2SDN-OwkhMACK4B%2fs1600%2fBlue%252Bhour%252BFinland_by_Laurence%252BNorah.jpg&ehk=XR3Klh2OA0OxZWYqKXVJdWSMEtRQdhxKMW77zQU6gpI%3d&risl=&pid=ImgRaw&r=0"

    const Hot_Url = "https://png.pngtree.com/thumb_back/fh260/background/20220519/pngtree-sunset-in-the-apple-orchard-on-hillside-agricultural-foliage-ray-photo-image_26617352.jpg"

    const Rain_Url = "https://static.vecteezy.com/system/resources/thumbnails/057/121/669/small_2x/rainy-day-wallpaper-hd-wallpaper-rain-wallpaper-hd-wallpaper-rain-wallpaper-hd-wallpaper-rain-wallpaper-photo.jpg"

    return (
        <div className='infoContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? Rain_Url : info.temp > 15 ? Hot_Url : Cold_Url}
                    title="weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Weather Info - {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temp : {info.temp}&deg;C</p>
                        <p>Max Temp : {info.tempmax}&deg;C</p>
                        <p>Min Temp : {info.tempmin}&deg;C</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>The weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}