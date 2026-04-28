class UserModel {
  static async findAll() {
    const { db } = await import("../config/db.js");
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  static async findById(id) {
    const { db } = await import("../config/db.js");
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);
      });
    });
  }

  static async create(userData) {
    const { name } = userData;
    const { db } = await import("../config/db.js");
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO users (name) VALUES (?)", [name], (err, result) => {
        if (err) reject(err);
        resolve({ id: result.insertId, name });
      });
    });
  }

  static async update(id, userData) {
    const { name } = userData;
    const { db } = await import("../config/db.js");
    return new Promise((resolve, reject) => {
      db.query("UPDATE users SET name = ? WHERE id = ?", [name, id], (err, result) => {
        if (err) reject(err);
        resolve({ id, name });
      });
    });
  }

  static async delete(id) {
    const { db } = await import("../config/db.js");
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
        if (err) reject(err);
        resolve({ message: "User deleted" });
      });
    });
  }
}

export default UserModel;