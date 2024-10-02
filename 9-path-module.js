const path = require("path");

console.log("Separator symbol:", path.sep); // shows the separator :'\'

const filePath = path.join("/content", "subfolder", "test.txt"); // joins the directory and subdirectory and file names to form a path name
console.log("Joined path:", filePath);

const base = path.basename(filePath); // provides the current file name of the entire file path
console.log("Base path:", base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log("Absolute path:", absolute);
