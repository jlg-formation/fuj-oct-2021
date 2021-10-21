const fs = require("fs");

fs.readdir(".", (err, files) => {
  if (err) {
    console.log("err: ", err);
    return;
  }
  console.log("files: ", files);
  fs.readFile(files[0], { encoding: "utf-8" }, (err2, content) => {
    if (err2) {
      console.log("err: ", err2);
      return;
    }
    console.log("content: ", content);
  });
});
