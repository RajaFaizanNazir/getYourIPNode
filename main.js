const express = require('express')
const app = express()
const port = 3000
const IP = require('ip');
const axios = require('axios');
const API_KEY = 'YOUR_API_KEY';
const URL = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + API_KEY;

const sendAPIRequest = async (ipAddress) => {
    const apiResponse = await axios.get(URL + "&ip_address=" + ipAddress);
    return apiResponse.data;
}

app.get('/', async (req, res) => {
    const ipAddress = IP.address();
    const ipAddressInformation = await sendAPIRequest(ipAddress);
    res.send(ipAddressInformation)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})