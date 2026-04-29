import { useState } from "react";
import Info from "./Info";
import Search from "./Search";

export default function Weather() {

    let [weatherInfo, setWeatherInfo] = useState({
        city: "Unknown!",
        temp: 30,
        tempmin: 29,
        tempmax: 32,
        humidity: 32,
        feelslike: 28.8,
        weather: "clear sky"
    });

    const [err, setErr] = useState(false);

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    const isError = (err) => {
        setErr(err);
    }

    return (
        <div>
            <Search updateInfo={updateInfo} errInfo={isError} />
            <br />
            {err ? <h3>No such city found. Please try again!</h3> : <Info info={weatherInfo} />}
        </div>
    )
}