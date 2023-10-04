//learn file
const { MongoClient, ObjectId } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "task-manager";
const client = new MongoClient(url);

const id = new ObjectId();
console.log(id);

async function main() {
  client.connect();
  client.is;

  const db = client.db(dbName);
  const collection = db.collection("users");

  // return collection.findOne({name: "Filipa", age: 27})

  // var array = await collection.find({completed : false}).toArray()
  // console.log(array)

  // var user =  await collection.findOne({_id: new ObjectId("65142c0eb0d7e80736b70fd2")})
  // console.log(user);
  // const updatePromise = await collection.updateOne(
  //   { _id: new ObjectId("65142c0eb0d7e80736b70fd2") },
  //   { $set: { name: "alfredo" } }
  // );
  // console.log(updatePromise)

  await collection.updateMany({ age: 17 }, { $inc: { age: 1 } });
  const user = await collection.deleteMany({ age: 18 });
  console.log(user);
}

main()
  //   .then(console.log)
  // .catch(console.error)
  .finally(() => client.close());
