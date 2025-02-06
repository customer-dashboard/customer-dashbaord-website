import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://customerdashboardpro:aaPo77bxI4OvaHB8@cluster0.f619pih.mongodb.net/?retryWrites=true&w=majority";
const mongoclient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const Connection = async (collectionName)=>{
  await mongoclient.connect();
  const dbName = "Sessions_data";
  const database = mongoclient.db(dbName);
  return database.collection(collectionName);
}


export async function GetCollectionMongoDB(collectionName) {
  try {
    const collection = await Connection(collectionName);
    try {
     return await collection.find({}).toArray();
    } catch (err) {
    console.error(`Something went wrong trying to find one document: ${err}\n`);
    }
  } finally {
  }
}



