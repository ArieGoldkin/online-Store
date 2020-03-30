import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./connect-db";

let port = 9999;
let app = express();

app.listen(port, console.log("Server is listening on port", port));

// app.get("/", (req, res) => {
//   res.send("Hello World!!! ");
// });

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());

export const addNewProduct = async product => {
  let db = await connectDB();
  let collection = db.collection(`products`);
  await collection.insertOne(product);
};

export const updateProduct = async product => {
  let { id, category, name, price, units, isAvailable } = product;
  let db = await connectDB();
  let collection = db.collection(`products`);

  if (category) {
    await collection.updateOne({ id }, { $set: { category } });
  }

  if (name) {
    await collection.updateOne({ id }, { $set: { name } });
  }

  if (price) {
    await collection.updateOne({ id }, { $set: { price } });
  }

  if (units) {
    await collection.updateOne({ id }, { $set: { units } });
  }

  if (isAvailable !== undefined) {
    await collection.updateOne({ id }, { $set: { isAvailable } });
  }
};

app.post("/product/new", async (req, res) => {
  let product = req.body.product;
  await addNewProduct(product);
  res.status(200).send();
});

app.post("/product/update", async (req, res) => {
  let product = req.body.product;
  await updateProduct(product);
  res.status(200).send();
});
