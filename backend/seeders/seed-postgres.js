import "dotenv/config";
import fs from "fs";
import sequelize from "../src/config/sequelize.js";

import User from "../src/models/postgres/user.model.js";
import Job from "../src/models/postgres/job.model.js";
import Application from "../src/models/postgres/application.model.js";

const seedUsers = async () => {
  const users = JSON.parse(
    fs.readFileSync("./seeders/data/users.json", "utf-8")
  );

  await User.bulkCreate(users);
};

const seedJobs = async () => {
  const jobs = JSON.parse(
    fs.readFileSync("./seeders/data/jobs.json", "utf-8")
  );

  await Job.bulkCreate(jobs);
};

const seedApplications = async () => {
  const applications = JSON.parse(
    fs.readFileSync("./seeders/data/applications.json", "utf-8")
  );

  await Application.bulkCreate(applications);
};

const runSeeder = async () => {
  try {
    // Development only
    await sequelize.sync({ force: true });

    await seedUsers();
    await seedJobs();
    await seedApplications();

    console.log("✅ PostgreSQL seed completed.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

runSeeder();