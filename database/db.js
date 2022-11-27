import mongoose from "mongoose";

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.ziitm89.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("MongoDb CONECTATO!!!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectToDb;
