import cors from "cors";
import express from "express";
import morgan from "morgan";
import { resolve } from "path";
import serveIndex from "serve-index";
import { api } from "./api";

console.log("About to start the server...");

const app = express();
const port = 3000;
const dir = resolve("../front/dist/front");

// cors
app.use(cors());

// access log
app.use(morgan("tiny"));

// business
app.use("/api", api());

app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
