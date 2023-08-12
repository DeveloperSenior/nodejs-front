const fetch = require('node-fetch');

exports.findUsers = async() => {
    const response = await fetch("http://localhost:3005/users", { method: 'get' });
    return response.json();
}