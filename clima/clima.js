const axios = require('axios')
const getClima = async (lat, lon) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a0c59cd9fe769e5f112160c53c50e0e0&units=metric`
  )

  return resp.data.main.temp
}
module.exports = {
  getClima
}
