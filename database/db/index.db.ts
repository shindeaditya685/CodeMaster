import mongoose from "mongoose";

const ConnectToDB = async () => {
  const connectionURL = process.env.NEXT_PUBLIC_MONGODB_CONNECTION_URL;

  mongoose
    .connect(connectionURL as string)
    .then(() => console.log("Connection done successfully!"))
    .catch((err) => console.log(err));
};

export default ConnectToDB;
