import { DataTypes } from "sequelize";
import sequelize from "../../config/sequelize.js";

const Application = sequelize.define(
  "Application",
  {
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    resumeUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM(
        "Pending",
        "Reviewed",
        "Accepted",
        "Rejected"
      ),
      defaultValue: "Pending",
    },
  },
  {
    tableName: "applications",
    timestamps: true,
  }
);

export default Application;