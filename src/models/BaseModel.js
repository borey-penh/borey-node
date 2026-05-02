class BaseModel {
  static tableName = "table";

  static async getDb() {
    const { db } = await import("../config/db.js");
    return db;
  }

  static async findAll() {
    const db = await this.getDb();
    const [rows] = await db.query(`SELECT * FROM ${this.tableName}`);
    return rows;
  }

  static async findById(id) {
    const db = await this.getDb();
    const [rows] = await db.query(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id]);
    return rows[0];
  }

  static async create(data) {
    const db = await this.getDb();
    const fields = Object.keys(data);
    const values = Object.values(data);
    const placeholders = fields.map(() => "?").join(", ");

    const [result] = await db.query(
      `INSERT INTO ${this.tableName} (${fields.join(", ")}) VALUES (${placeholders})`,
      values
    );
    return { id: result.insertId, ...data };
  }

  static async update(id, data) {
    const { db } = await import("../config/db.js");
    const fields = Object.keys(data);
    const values = Object.values(data);
    const setClause = fields.map((f) => `${f} = ?`).join(", ");

    const [result] = await db.query(
      `UPDATE ${this.tableName} SET ${setClause} WHERE id = ?`,
      [...values, id]
    );
    return { id, ...data };
  }

  static async delete(id) {
    const db = await this.getDb();
    await db.query(`DELETE FROM ${this.tableName} WHERE id = ?`, [id]);
    return { message: "Deleted successfully" };
  }

  static async findByColumn(column, value) {
    const db = await this.getDb();
    const [rows] = await db.query(`SELECT * FROM ${this.tableName} WHERE ${column} = ?`, [value]);
    return rows[0];
  }

  static async count() {
    const db = await this.getDb();
    const [rows] = await db.query(`SELECT COUNT(*) as total FROM ${this.tableName}`);
    return rows[0].total;
  }
}

export default BaseModel;