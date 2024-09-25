const bodyParser = require('body-parser');
const car = require('./Router/cars');
const marca = require('./Router/marca');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        car,
        marca
    )
}