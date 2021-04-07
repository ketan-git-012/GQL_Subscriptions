const { DataStore } = require('notarealdb');
const store = new DataStore('./data');
// const trainee = require('./../../data')


module.exports = {
    trainee : store.collection('trainee')
}