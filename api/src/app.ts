console.log('Hello world!');
//get all users
// add
// update
// delete


// routing library - express layer
//

const express = require('express')
const app = express()
const port = 3000

const cors = require("cors");
const corsOptions = {
    origin: "*",
    // Credentials

}

app.use(cors(corsOptions))

app.get('/user', (req :any, res:any) => {
  res.send([
    {
      name: "Sarah",
      surname: "Halford",
      number: "0834690565",
      email: "X00192313@mytudublin.ie",
      address: "place, street road, Rush, Co. Dublin",
      experience: "Site Assiastant",
      education: "Level 8",
      certs: "Training Certs",
      drive: "Yes",
      position: "Supervisor",
      site: "None",
    },
    {
      name: "John",
      surname: "Bird",
      number: "0864695505",
      email: "email@addresss.ie",
      address: "place, street road, town, Co. County",
      experience: "Experience",
      education: "Education",
      certs: "Training Certs",
      drive: "NO",
      position: "Company Position",
      site: "Trim Castle Excavation",
    },
    {
      name: "Cormac",
      surname: "O'Sullivan",
      number: "0867690305",
      email: "email@addresss.ie",
      address: "place, street road, town, Co. County",
      experience: "Experience",
      education: "Education",
      certs: "Training Certs",
      drive: "Yes",
      position: "Company Position",
      site: "None",
    },
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
