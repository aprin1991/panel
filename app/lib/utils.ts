import mongoose from "mongoose";

type ConnectionType = {
  isConnected?: number;
};

const connection: ConnectionType = {};

export const connectToDB = async (): Promise<void> => {
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGO as string);
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message); // More specific error handling
  }
};
