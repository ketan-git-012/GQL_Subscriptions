const dotenv = require('dotenv');

dotenv.config();

const configApp = {
    server : {
        PORT : process.env.PORT
    }
};

module.exports = configApp;