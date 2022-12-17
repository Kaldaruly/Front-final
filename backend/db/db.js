const mongoose = require('mongoose');

module.exports = () => {
    const connectParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        mongoose.connect('mongodb://localhost:27017/autorization', connectParams)
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
        console.log('Could not connect to database');
    }
}