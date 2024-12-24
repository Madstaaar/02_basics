// const express = require('express');
import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('I made something...');
})
app.get('/about', (req, res) => {
    res.send('trying the route...');
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})