import express from "express";
import morgan from "morgan";
import renderRecos from "./green-recos/render.js";

const app = express();
app.use(morgan("dev"));
app.use("/green/images", express.static("./images"));
app.use("/green", express.static("./build"));

app.use("/green-recos", (req, res) => {
  res.send(renderRecos(req.query.sku));
});

app.listen(3002);
