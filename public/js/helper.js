let API_Key = import.meta.env.VITE_API_URL;
let API_Id = import.meta.env.VITE_API_ID;

export const getWeather = async (city) => {
    try {
        let response = await fetch(`${API_Key}?q=${city}&appid=${API_Id}&units=metric`);
        if (!response.ok) {
            throw new Error("No such city found!");
        }
        let finalResponse = await response.json();
        let result = {
            city: finalResponse.name,
            temp: finalResponse.main.temp,
            tempmin: finalResponse.main.temp_min,
            tempmax: finalResponse.main.temp_max,
            humidity: finalResponse.main.humidity,
            feelslike: finalResponse.main.feels_like,
            weather: finalResponse.weather[0].description
        };
        return result;

    } catch (error) {
        throw error;
    }
}