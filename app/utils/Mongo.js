import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://customerdashboardpro:aaPo77bxI4OvaHB8@cluster0.f619pih.mongodb.net/?retryWrites=true&w=majority";
const mongoclient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const ConnectionDB = async (collectionName) => {
  await mongoclient.connect();
  const dbName = "customer_dashboard_pro";
  const database = mongoclient.db(dbName);
  return database.collection(collectionName);
};
export async function GetCollectionMongoDB(collectionName) {
  try {
    const collection = await ConnectionDB(collectionName);
    try {
     return await collection.find({}).toArray();
    } catch (err) {
    console.error(`Something went wrong trying to find one document: ${err}\n`);
    }
  } finally {
  }
}