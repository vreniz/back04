import { Router, Request, Response } from "express";
import { readUsers, readUsersByHobby } from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  const users = await readUsers();

  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

// NEW FUNCTION: Get users by hobby
async function GetUsersByHobby(request: Request, response: Response) {
  const hobby = request.query.hobby as string;

  if (!hobby) {
    return response.status(400).json({
      message: "Hobby is required.",
    });
  }

  const users = await readUsersByHobby(hobby);

  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
userRoutes.get("/hobby", GetUsersByHobby);  // New endpoint for hobby

// EXPORT ROUTES
export default userRoutes;

