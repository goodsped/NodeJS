import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Abe ");
writer.write("Kolin");
writer.end();

writer.on("finish", () => {
  const reader = fs.createReadStream("target.log");
  reader.on("data", (data) => {
    console.info(data.toString());
  });
});
