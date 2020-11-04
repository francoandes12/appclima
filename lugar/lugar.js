const axios = require('axios')
const getLugar = async (dir) => {
  const encodedUrl = encodeURI(dir)
  const resp = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodedUrl}&key=1e221992a6e54cfd808094ef048d4488`
  )
  if (resp.data.results.length === 0) {
    throw new Error(`no hay resultados para ${dir}`)
  }
  const data = resp.data.results[0]
  const { components, geometry } = data
  const { lat, lng } = geometry
  const { city, country } = components
  const direccion = `${city}, ${country}`
  return {
    lat,
    lng,
    direccion
  }
}
module.exports = {
  getLugar
}
