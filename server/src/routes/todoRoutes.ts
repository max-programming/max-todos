import { Router } from "express";
import todoController from "../controllers/todoController";
const router = Router();

router.get("/", todoController.get_todos);
router.post("/", todoController.post_todo);
router.delete("/", todoController.delete_all);
router.delete("/:id", todoController.delete_todo);
router.put("/update/:id", todoController.update_todo);
router.put("/complete/:id", todoController.update_todo_completed);
router.put("/star/:id", todoController.update_todo_starred);

export default router;
