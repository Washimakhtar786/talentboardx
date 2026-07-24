import "dotenv/config";

import app from "./src/app.js";
import connectMongoDB from "./src/config/mongodb.js";
import sequelize from "./src/config/sequelize.js";

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    if (process.env.DB_TYPE === "mongo") {
      await connectMongoDB();
      console.log("✅ MongoDB Connected");
    } else if (process.env.DB_TYPE === "postgres") {
      await sequelize.authenticate();
      console.log("✅ PostgreSQL Connected");

      await sequelize.sync();
      console.log("✅ Sequelize Models Synced");
    } else {
      throw new Error("Invalid DB_TYPE");
    }

    

    app.listen(PORT, () => {
      console.log(`🚀 Backend running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database Connection Failed:", error.message);
    process.exit(1);
  }
};

startServer();

