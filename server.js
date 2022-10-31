// this server file is just where everything will be instantiated all actual logic elsewhere
import db from "./db/connection.js";

import routes from "./routes/index.js";
import express from "express";
import cors from "cors"; // npm package check out documentation on npm
import chalk from "chalk";

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

// app.use(logger("dev"))

app.use(express.json());

app.use("/", routes); // order of .use routes doesn't matter so long as it comes before starting up the server

db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("connected to MongoDB"));
  app.listen(port, () => {
    console.log(
      `Express server running in development on http://localhost:${port}`
    );
  });
});
