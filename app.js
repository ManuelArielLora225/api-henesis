const express = require('express')
const app = express();
const PORT = 3000;

const router = require('./router');
const cors = require('cors')


app.use(express.json())

app.use(cors())

app.use('/api/henesis', router)

app.listen(PORT, () => { console.log(`El servidor esta escuchado en el puerto ${PORT}...`)})