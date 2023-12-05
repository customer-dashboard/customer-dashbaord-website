const path = require('path');
const cors = require('cors');
const express = require("express");
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion }= require("mongodb");
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3001;
const today = new Date();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const date = today.getDate();
const finaldate = `${month}/${date}/${year}`;
const app = express();
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(bodyParser.json())
app.use(cors());
app.get("/api", (req, res) => {
res.send("hello");
})
const uri = "mongodb+srv://customerdashboardpro:aaPo77bxI4OvaHB8@cluster0.f619pih.mongodb.net/?retryWrites=true&w=majority";
const mongoclient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function GetCollectionMongoDB(Collection) {
    try {
      await mongoclient.connect();
      const dbName = "Sessions_data";
      var collectionName = Collection;
      const database = mongoclient.db(dbName);
      const collection = database.collection(collectionName);
      try {
       return await collection.find({}).toArray();
      } catch (err) {
      console.error(`Something went wrong trying to find one document: ${err}\n`);
      }
    } finally {
    }
  }
  app.get("/get-changelog", async(req, resp) => {
    let data = await GetCollectionMongoDB("installation_faq");
    resp.send({data});
  });
app.post("/contact-us", (req, resp) => {
  const formData = (req.body);
  try {
      const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
              user: "customerdashboardpro@gmail.com",
              pass: "ibce swyq kcgq oxkr"
          }
      });
      const mainOption = {
          from: "customerdashboardpro@gmail.com",
          to: "support@customerdashboard.pro",
          subject: `New partner integration message on ${finaldate}`,
          html: `<table style="text-align:left;width: 100%; margin: auto;  max-width:700px;background-color:#f8f8f8;border-radius:3px;font-family:helvetica;" cellpadding="10">
          <tr><td colspan="2" style="text-align:center;font-weight: bold; font-size: 20px; color: #000;padding-top:30px;" align="center">New Integration Request</td>  </tr>
          <tr style="display:block; margin:1rem 0rem;">
              <th style="display:block; padding:5px 10px;">FirstName:</th>
              <td style="display:block; padding:5px 10px;">${formData.formData.FirstName}</td>
           </tr>
          <tr style="display:block; margin:1rem 0rem;">
              <th style="display:block; padding:5px 10px;">LastName:</th>
              <td style="display:block; padding:5px 10px;">${formData.formData.LastName}</td>
          </tr>
          <tr style="display:block; margin:1rem 0rem;">
              <th style="display:block; padding:5px 10px;">Email:</th>
              <td style="display:block; padding:5px 10px;">${formData.formData.email}</td>
          </tr>
          <tr style="display:block; margin:1rem 0rem;">
              <th style="display:block; padding:5px 10px;">Message:</th>
               <td style="display:block; padding:5px 10px;">${formData.formData.message}</td>
           </tr>
          </table>`
      }
      transporter.sendMail(mainOption, (error, info) => {
          if (error) {
              console.log("Error", error);
          } else {
              console.log("Email Sent: " + info.response);
              resp.status(201).json({ status: 201, info })
          }
      })
  } catch (error) {
      resp.status(401).json({ status: 401, error })
  }
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});