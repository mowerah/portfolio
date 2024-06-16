// import app from "./app";
// import { sequelize } from "./config/database";

// const PORT = process.env.PORT || 3000;

// const startServer = async () => {
//   try {
//     await sequelize.sync();
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// startServer();

import app from "./app";
import { sequelize } from "./config/database";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    console.log("Trying to connect to the database...");
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
