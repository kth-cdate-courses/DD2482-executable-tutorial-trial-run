import express from "express";
export {};

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello World ${new Date()}`);
});

app.listen(80, () => {
  console.log("Server is running on port 80");
});
