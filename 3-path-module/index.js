const path = require('path')

console.log("Directory name",path.dirname(__filename)); // Returns directory name
console.log("File name",path.basename(__filename)); // Returns file name
console.log("File extension ",path.extname(__filename)); // Returns file extension

const joinPath = path.join('/user','documents','node','projects') // it will create path of elements written in it
console.log("Joined path",joinPath);

const resolvePath = path.resolve('user','documents','node','project') // it will provide full path and then add path in last
console.log("resolve path",resolvePath)


const normalizePath = path.normalize('/user/.documents/../node/projects') // it will simplify the path
console.log("Normalize path",normalizePath);




