import { MongoClient } from "mongodb";

const url = "mongodb+srv://customerdashboardpro:aaPo77bxI4OvaHB8@cluster0.f619pih.mongodb.net/?retryWrites=true&w=majority";
const dbName = "Sessions_data";


let client;

export async function getClient() {
  if (!client) {
    client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    // console.log("client",client);
    await client.connect();
  }
  return client;
}

export async function getDatabase() {
  const client = await getClient();
  return client.db(dbName);
}

