
import UserController from "../controller/UserController.js";

const userRouter = (app) => {
  // GET all users
  app.get("/users", UserController.getAllUsers);
  
  // GET user by id
  app.get("/users/:id", UserController.getUserById);
  
  // POST create new user
  app.post("/users", UserController.createUser);
  
  // PUT update user
  app.put("/users/:id", UserController.updateUser);
  
  // DELETE user
  app.delete("/users/:id", UserController.deleteUser);
};

export default userRouter;