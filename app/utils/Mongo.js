import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://customerdashboardpro:aaPo77bxI4OvaHB8@cluster0.f619pih.mongodb.net/";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const mongoclient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

mongoclient.connect();

const DATABASE = mongoclient.db("Sessions_data");

export default DATABASE;

