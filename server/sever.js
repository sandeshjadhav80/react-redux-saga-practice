import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'
// import Loading from '../src/Loading';

const PORT = 8000
const app = express()

app.use('^/$', (req, res, next) => {
    // console.log('data to check', ReactDOMServer.renderToString(<App />));
    // res.send('hccece');
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (error, data) => {
        if(error) {
            console.log(error)
            return res.status(500).send('Something went wrong')
        } 
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">Welcome to ssr, please wait</div>`
        ))
    });
});

// app.use('^/$', (req, res, next) => {
//     res.send('welcome')
// })

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
})