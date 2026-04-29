import { useState } from "react";
import Info from "./Info";
import Search from "./Search";

export default function Weather() {

    let [weatherInfo , setWeatherInfo] = useState({
        city: "sirohi",
        temp: 30,
        tempmin: 29,
        tempmax: 32,
        humidity: 32,
        feelslike: 28.8,
        weather: "clear sky"
    })

    return (
        <div>
            <Search info={weatherInfo}/>
            <br/>
            <Info info={weatherInfo} />
        </div>
    )
}