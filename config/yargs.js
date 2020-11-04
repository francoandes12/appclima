const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    demand: true,
    desc: 'direccion de la ciudad para obtener el clima'
  }
}).argv

module.exports = {
  argv
}
