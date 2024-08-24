const { exec, spawn } = require("child_process");

exec("node modules/02-console.js", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

let process = spawn("ls", ["-la"]);

console.log("process:", process.pid);
console.log("process.connected:", process.connected);

process.stdout.on("data", (data) => {
  console.log("Is process killed?", process.killed);
  console.log(data.toString());
});

process.on("exit", () => {
  console.log("Process ended");
  process.kill(); // Kill the process
  console.log("Is process killed?", process.killed);
});
