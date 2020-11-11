const express = require('express')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 7000

const app = express()

app.use(express.json())

app.use(express.static('client/build'))

app.get('/api/test', (_, res) => {
	res.send({
		msg: "Hello world"
	})
})

app.get('/*', (_, res) => {
	console.log('__dirname', __dirname)
	console.log('here')
	res.sendFile(path.join(__dirname, './client/buildindex.html'))
})

app.listen(PORT, () => {
	console.log(`Le serveur est lancé sur le port: ${PORT}`)
})