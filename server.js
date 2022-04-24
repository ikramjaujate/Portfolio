const path = require("path");
const express = require("express");
const app = express(); 
const helmet = require('helmet');

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      'default-src': ['\'self\'', 'https://img.icons8.com' , 'blob:'],
      'object-src' : ['\'self\'', 'https://img.icons8.com' , 'data:'],
      'img-src' : ['\'self\'', 'https://img.icons8.com' ,'data:'],
      'script-src' : ['\'self\'', '\'unsafe-inline\'', '\'unsafe-eval\''],
      'script-src-attr': ['\'self\'', '\'unsafe-inline\'', '\'unsafe-eval\''],
    }
  }));
app.use(helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }));
app.use(express.static("public"));
app.use(express.static("public/static"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
 });

app.listen(8080, () => {
  console.log("server started on port 8080");
});