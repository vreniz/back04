import express from "express";
import cors from "cors";

// API ROUTES IMPORTS
import userRoutes from "./user/v1/user.routes";

// MIDDLEWARES
const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const SERVER_VERSION = "/api/v1/";

app.use(SERVER_VERSION + "users", userRoutes);

// START SERVER
app.listen(8080, () => {
  console.log("Server listening to port 8080.");
});
