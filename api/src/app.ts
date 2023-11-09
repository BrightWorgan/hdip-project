import 'dotenv/config'

// array
const users = [{
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
},]

//database
import knex from "knex";
const db = knex({
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST,
    port : parseInt(process.env.DB_PORT ?? "0", 10),
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : 'SheetScribe'
  }
});



// console.log('Hello world!');

// routing library - express layer
//

import express from "express";
import bodyParser from "body-parser";
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

// dogs
app.get('/dogs', async (req, res) =>{
  const allDogs = await db("Dogs").select("*")
  res.send(allDogs)
// all dogs
} )

// USERS / Team Page:

// get users
app.get('/user', (req, res) => {
  res.send(users
  )
})

// post
app.post('/user', (req, res) => {
  console.log(req.body)
  users.push(req.body)
  res.send('Post Sucess');
  
})

// Remove a user
app.delete('/user', (req, res) =>{
  //user id
  const userID = "00001"
  const LookFor = (user:any) => {
    if (user.userID == userID)
      return true
    else{
      return false
    }
  }

  const selectedUser = users.findIndex(LookFor)

  if (selectedUser === -1){
    throw new Error("User ID / User is not present in the system")
  }
  else {
    users.splice(selectedUser, 1)
  }

  res.send("Okay")
})


// update / edit user
app.patch('/user', (req, res) => {

})

// Projects:

// get projects
app.get('/project', (req :any, res:any) => {
    res.send(
        [
            {
              projectID: "0000001",
              title: "Trim Castle Field School",
              imgSrc: "src/assets/IMAG0463.jpg",
              location: "Location: Trim Castle, Trim, Co. Meath",
              siteID: "Site ID: 2023000000021",
              siteName: "Trim Castle Area 1",
              licenceNumber: "202300020009",
              director: "Sean Shannanan",
              description:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
              contractType: "Field School",
              startDate: "10/October/2023",
            },
            {
              projectID: "0000002",
              title: "Kylemore Abbey  Capel L-Dar Preparation",
              imgSrc: "src/assets/IMAG1100-EFFECTS.jpg",
              location: "Location: Kylemore Abbey, Co. Galway",
              siteID: "Site ID: 2023000000022",
              siteName: "Kylemore Abbey  Capel L-Dar Preparation",
              licenceNumber: "202300020076",
              director: "Derric Mountain",
              description:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
              contractType: "Count Council",
              startDate: "10/October/2023",
            },
            {
              projectID: "0000003",
              title: "Trim Castle Field School Winter Grads",
              imgSrc: "src/assets/trimCastleSideImage.jpg",
              location: "Location: Trim Castle, Trim, Co. Meath",
              siteID: "Site ID: 2023000000023",
              siteName: "Trim Castle",
              licenceNumber: "202300020009",
              director: "Sean Shannanan",
              description:
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
              contractType: "Field School",
              startDate: "10/October/2023",
            },
        ])
    })

// post, remove?, update
  
// CONTEXT
// get, post, remove?, update

// FINDS
// get, post, remove?, update

// SAMPLES
// get, post, remove?, update


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
