const fs = require("fs");

// fs.readdir ----------> readdir
// fs.readFile ----------> readFile

const readdir = (dirname) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(files);
    });
  });
};

const readFile = (filename, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, options, (err, content) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(content);
    });
  });
};

(async function () {
  try {
    const files = await readdir(".");
    console.log("files: ", files);
    const content = await readFile(files[0], { encoding: "utf-8" });
    console.log("content: ", content);
  } catch (err) {
    console.log("err: ", err);
  }
})();
