import app from "./app.js";
import "express-async-errors";
import sequelize from "./database/connection.js";
import "dotenv/config";

//Table models (sequelize)
import "./models/project.model.js";
import "./models/task.model.js";

const port = process.env.PORT;

// Initializes the server
const main = async () => {
  try {
    await sequelize.sync();
    app.listen(port, () => console.log(`App listening on port ${port}`));
  } catch (error) {
    console.log("could not start server", error);
  }
};

main();
