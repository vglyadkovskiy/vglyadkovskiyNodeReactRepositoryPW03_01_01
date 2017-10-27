
const TypeTransform = require("./TypeTransform");
const fs = require("fs");

let readableStream = fs.createReadStream("./input.txt", "utf8");
let writeableStream = fs.createWriteStream("./output.txt");
let tt = new TypeTransform();

readableStream.on("data", (chunk) => {
   tt.write(chunk);
   console.log(`-----------\nRaw data:\n${chunk}`);
});



tt.on("data", (chunk) => {
   	writeableStream.write(chunk);
   	console.log(`Transform data:\n${chunk}`);

	writeableStream.end();
});









