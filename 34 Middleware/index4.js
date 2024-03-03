import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true}));

var bandName = "";
function bandNameGen(req, res, next){
  console.log("Request method: ", req.method);
  console.log("Request URL: ", req.url);
  console.log(req.body);
  bandName = req.body["street"]+req.body["pet"];
  console.log(bandName);
  next();
}
app.use(bandNameGen);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:<\h1><h2>${bandName}✌️</h2>`);
  // cant do two send if you need to do response.write then response.end() to finish the sneding
})