import BaseModel from "./BaseModel.js";

class User extends BaseModel {
  static tableName = "users";
}

export default User;