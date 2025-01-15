import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

interface Cached {
  conn: mongoose.Connection | null;
  promise: Promise<mongoose.Connection> | null;
}

// Use a module-level cache instead of global
const cached: Cached = {
  conn: null,
  promise: null,
};

const dbConnect = async (): Promise<mongoose.Connection> => {
  // Check if the connection is already established
  if (cached.conn) {
    return cached.conn;
  }

  // If there's no connection, start a new one
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI as string)
      .then((mongooseInstance) => mongooseInstance.connection);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
