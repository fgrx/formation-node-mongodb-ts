import mongoose from "mongoose";

const connectDB = async () => {
  console.log(process.env.PORT);

  await mongoose
    .set("strictQuery", false)
    .connect(process.env.DATABASE_URL || "")
    .then(() => console.log("Connecté à MongoDB"))
    .catch((error) =>
      console.error("Problème de connexion avec la base de données", error)
    );
};

export default connectDB;
