require("dotenv").config();
const multer = require("multer");
const express = require("express");
const req = require("express/lib/request");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const File = require("./models/File");
const app = express();
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_URL);
const upload = multer({ dest: "uploads" });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), async (req, res) => {
  const fileDate = {
    path: req.file.path,
    originalName: req.file.originalname,
  };
  if (req.body.password != null && req.body.password !== "") {
    fileDate.password = await bcrypt.hash(req.body.password, 10);
  }

  const file = await File.create(fileDate);

  /* console.log(file)
  res.send(file.originalName); */

  res.render("index", { fileLink: `${req.headers.origin}/file/${file.id}` });
});

//app.get("/file/:id", async (req, res) => {});
//app.post("/file/:id", handleDownload);

app.route("/file/:id").get(handleDownload).post(handleDownload);

async function handleDownload(req, res) {
  //req.send(req.params.id)

  const file = await File.findById(req.params.id);

  if (file.password != null) {
    if (req.body.password == null) {
      res.render("password");
      return;
    }
  }

  if (!(await bcrypt.compare(req.body.password, file.password))) {
    res.render("password", { error: false });
    return;
  }

  file.downloadCount++;
  await file.save();
  //console.log(file.downloadCount);

  res.download(file.path, file.originalName);
}

app.listen(process.env.PORT);
console.log(`server runing on port ${process.env.PORT}`);
