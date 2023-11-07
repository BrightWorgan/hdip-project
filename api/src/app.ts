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
    origin: "*"

}

app.use(cors(corsOptions))

// get users
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
  
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
