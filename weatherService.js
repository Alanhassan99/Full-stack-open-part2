import axios from 'axios'

const apiKey = import.meta.env.VITE_WEATHER_API_KEY

const getWeather = (city) => {
    return axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
        .then(res => res.data)
}

export default { getWeather }