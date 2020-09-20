const fs = require('fs');

module.exports.readFile = (dataStore) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./data.json', 'utf8', (error, data) => {
            if (error) {
                reject(`Error reading file: ${error}`)
            } else {
                resolve(JSON.parse(data))
            }
        })
    })
}