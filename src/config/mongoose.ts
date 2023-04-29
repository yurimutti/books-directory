import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || ``;
const MONGO_DB_USER = process.env.MONGO_DB_USER || ``;
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD || ``;
const MONGO_DB_URL = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@books-directory.xekknaq.mongodb.net/test`;

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

mongoose.Promise;

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB reconnected");
});

mongoose.connection.on("error", (error: Error) => {
  console.error(`MongoDB connection error: ${error}`);
});

if (NODE_ENV == "development") {
  mongoose.set("debug", true);
}

export const connect = () => {
  mongoose
    .connect(MONGO_DB_URL, options)
    .then(() => console.log("MongoDB connected"));

  return mongoose.connection;
};
