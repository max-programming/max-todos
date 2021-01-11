import { Request, Response } from "express";
import Todo from "../models/Todo";

const todoController = {
  get_todos: async (req: Request, res: Response) => {
    try {
      const todos = await Todo.find();
      res.send(todos);
    } catch (err) {
      console.log(err);
    }
  },
  post_todo: async (req: Request, res: Response) => {
    try {
      const todo = new Todo(req.body);
      const response = await todo.save();
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  },
  delete_todo: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const response = await Todo.findByIdAndDelete(id);
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  },
  delete_all: async (req: Request, res: Response) => {
    try {
      const response = await Todo.deleteMany({});
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  },
  update_todo: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const response = await Todo.findByIdAndUpdate(
        id,
        { title: req.body.title },
        { new: true }
      );
      res.send(response);
    } catch (error) {}
  },
  update_todo_completed: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const response = await Todo.findByIdAndUpdate(
        id,
        { completed: !req.body.completed },
        { new: true }
      );
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  },
  update_todo_starred: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const response = await Todo.findByIdAndUpdate(
        id,
        { starred: !req.body.starred },
        { new: true }
      );
      res.send(response);
    } catch (err) {
      console.log(err);
    }
  },
};

export default todoController;
