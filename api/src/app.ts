import 'dotenv/config'
// routing library - express layer
import express from "express";
import bodyParser from "body-parser";
import router from './routes';

const app = express()

const port = 3000

const cors = require("cors");
const corsOptions = {
    origin: process.env.CORS
}

app.use(cors(corsOptions))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

router(app);

// @ts-ignore
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

