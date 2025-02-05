import dotenv from "dotenv";
// dotenv.config({});
import mysql from "mysql";
const Db_connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
Db_connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("connectino seccessfull");
  }
});
export default Db_connection;
