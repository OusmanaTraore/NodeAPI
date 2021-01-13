
//mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });
mongo "mongodb+srv://cluster0.qjo6i.mongodb.net/<dbname>" --username SuperUser


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://SuperUser:"+ process.env.PW + "@cluster0.qjo6i.mongodb.net/db1?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
fssgGyBmMuBLqOqf
mongodb+srv://SuperUser:<password>@cluster0.qjo6i.mongodb.net/<dbname>?retryWrites=true&w=majority
