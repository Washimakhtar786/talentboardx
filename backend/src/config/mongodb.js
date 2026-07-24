import mongoose from 'mongoose';

import dns from "node:dns";

// Force Node to use public DNS servers
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectMongoDB = async () => {
  try {
  console.log("Using URI:", process.env.MONGO_URI);

  await mongoose.connect(process.env.MONGO_URI);

  console.log("✅ MongoDB Connected");
} catch (error) {
  console.error("FULL ERROR:");
  console.error(error);
  throw error;
}
};

export default connectMongoDB;