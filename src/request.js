const path = require('path')
const express = require('express');

const app = express();
const PORT = 5000

app.use(express.static(path.resolve(__dirname + '../../build')))

app.get('/', (req, res) => {
	setTimeout(() => {
		res.sendFile(path.resolve(__dirname + '../../build/index.html'))
	}, 0)
})


app.listen(PORT, () => console.log('listening on port 5000'))