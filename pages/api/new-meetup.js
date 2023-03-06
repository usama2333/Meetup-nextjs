// import { MongoClient } from "mongodb";
// // POST  /api/new-meetup

// async function handler (req , res) {

//     if ( req.method === 'POST')  {
//         const data = req.body;

//         const client = await  MongoClient.connect('mongodb+srv://usamawizz:9dOfITLvtAIoce4N@cluster0.knq7ufw.mongodb.net/meetups?retryWrites=true&w=majority');
//         const meetupsCollections = db.collection('meetups');
//         const result = await meetupsCollections.insertOne(data);
//         console.log(result);
//         client.close();
//         res.status(201).json({ message : 'Meetup Inserted'});
//     }
// }






import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
        'mongodb+srv://usamawizz:9dOfITLvtAIoce4N@cluster0.knq7ufw.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;