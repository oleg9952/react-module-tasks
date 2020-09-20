const fs = require('fs');
const FILE = require('../data.json');

module.exports.writeFile = (payload) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(FILE, JSON.stringify(payload, null, 2), (error) => {
            if (error) {
                reject(`Error writing file: ${error}`)
            } else {
                resolve('File updated')        
            }
        })
    })
}