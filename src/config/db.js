import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "borey77",
  database: "test_db",
  waitForConnections: true,
  connectionLimit: 10
});

console.log("✅ Database pool created");