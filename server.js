const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

app.use(requireHTTPS);

// here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (
    !req.secure &&
    req.get("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV !== "development"
  ) {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}
