
import UserController from "../controller/UserController.js";

const userController = new UserController();

const userRouter = (app) => {
  app.get("/users", userController.getUsers.bind(userController));
  app.get("/users/:id", userController.getUserById.bind(userController));
  app.post("/users", userController.createUser.bind(userController));
  app.put("/users/:id", userController.updateUser.bind(userController));
  app.delete("/users/:id", userController.deleteUser.bind(userController));
};

export default userRouter;