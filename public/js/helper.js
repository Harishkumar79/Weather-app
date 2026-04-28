let API_Key = import.meta.env.VITE_API_URL;
let API_Id = import.meta.env.VITE_API_ID;

export const getWeather = async (city) => {
    let response = await fetch(`${API_Key}?q=${city}&limit=${2}&appid=${API_Id}&units=metric`);
    let finalResponse = await response.json();
    console.log('finalResponse', finalResponse);

    let result = {
        city : finalResponse.name,
        temp :finalResponse.main.temp,
        tempmin:finalResponse.main.temp_min,
        tempmax:finalResponse.main.temp_max,
        humidity:finalResponse.main.humidity,
        feelslike:finalResponse.main.feels_like,
        weather:finalResponse.weather[0].description
    };

    console.log('result', result);
}