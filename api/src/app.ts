import 'dotenv/config'
// routing library - express layer
import express from "express";
import bodyParser from "body-parser";
import router from './routes';

const app = express()

const port = 3000

const cors = require("cors");
const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
