import { MongoClient } from "mongodb";

// api/new-meetup
//POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Harsh:Harsh18@cluster0.m5mhmz8.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meeetupsCollection = db.collection("meetups");

    const result = await meeetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
