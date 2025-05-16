import express from "express";
import bodyParser from "body-parser";
import postsPath from "./Routes/posts.js";
import methodOverride from "method-override";

const app = express();
app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Use API Routes
app.use("/", postsPath);

const port = 3000;
app.listen(port, () => {
  console.log("the server is running");
});
