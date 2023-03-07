const express = require("express");
//const helmet = require("helmet")
const multer = require("multer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./controllers/auth");
const userRoute = require("./controllers/users");
const postRoute = require("./controllers/posts");
const categoryRoute = require("./controllers/categories");
const path = require("path");

const app = express();
{/* HELMET IS BLOCKING IMAGES FROM THE BACKEND
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "img-src": ["'self'", "http://localhost:5000/images/"],
    },
  },
}));
*/}
dotenv.config();

//connecting to mongoDB
mongoose
  .connect("mongodb+srv://hyperiondev:Spr@w1c0mp@n!@clusterhyperiondevlevel.wstergt.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
//endpoints
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

app.listen( 5000, () => {
  console.log("Listening at port 5000");
});
