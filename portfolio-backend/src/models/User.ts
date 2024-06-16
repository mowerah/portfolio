import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: DataTypes.STRING,
});

export default User;
