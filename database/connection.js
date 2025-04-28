import Sequelize from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);

export default sequelize;
