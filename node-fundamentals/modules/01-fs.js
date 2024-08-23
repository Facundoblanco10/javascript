const fs = require("fs");

function read(route, cb) {
  fs.readFile(route, (error, data) => {
    cb(data.toString());
  });
}

function write(route, content, cb) {
  fs.writeFile(route, content, (error) => {
    if (error) {
      console.error("I couldn't write", error);
    } else {
      cb("File written successfully");
    }
  });
}

function deleteFile(route, cb) {
  fs.unlink(route, cb);
}

deleteFile(__dirname + "/pepe.txt", console.log);
write(__dirname + "/pepe.txt", "I am a new fsile", console.log);
read(__dirname + "/pepe.txt", console.log);
