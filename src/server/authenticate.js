import { v4 as uuidv4 } from "uuid";
import md5 from "md5";
import { connectDB } from "./connect-db";

const authenticationTokens = [];

async function assembleUserState(user) {
  let db = await connectDB();
  // what i want to expose to user
    // OPTION 1 only what is owned by the user
    // let products = await db.collection("products").find({ owner: user.id }).toArray();
    // let categories = await db.collection("categories").find({owner: user.id}).toArray();
    // OPTION 2 show eveything to the user
  let products = await db.collection("products").find({}).toArray();
  let categories = await db.collection("categories").find({}).toArray();

  return {
    products,
    categories,
    session: { authenticated: "AUTHENTICATED", id: user.id },
  };
}

export const authenticationRoute = (app) => {
  app.post("/authenticate", async (req, res) => {
    let { username, password } = req.body;
    let db = await connectDB();
    let collection = db.collection("users");

    let user = await collection.findOne({ name: username });

    if (!user) {
      return res.status(500).send("User not found");
    }
    // if got the user convert the password
    let hash = md5(password);
    let passwordCorrect = hash === user.passwordHash;

    if (!passwordCorrect) {
      return res.status(500).send("Password incorrect");
    }

    // if got to here everithing is ok we assembleUserState

    // this part for more security in the future
    let token = uuidv4();

    authenticationTokens.push({
      token,
      userID: user.id,
    });

    let state = await assembleUserState(user);

    res.send({ token, state });
  });
};
