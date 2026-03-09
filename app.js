const http =require('http')
const fs = require("fs");
const path = require("path");

const port =5000
const app=http.createServer((req,res)=>{
    res.end('server')
})
fs.writeFileSync('javascript-fs','this is the code')

//Directory path
const dirPath = path.join(__dirname, "myfiles");
const filepath = path.join(dirPath, "example.txt");

// 1.create Directory

fs.mkdir(dirPath, { recursive: true }, (err) => {
  if (err) throw err;
  console.log("Directory created,");

  // 2.Write to File

  fs.writeFile(filepath, "hello, this is text!", (err) => {
    if (err) throw err;
    console.log("file written,");

    // 3.Read File

    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) throw err;
      console.log("Directory created:", data);

      // 4.Append to File

      fs.appendFile(filepath, "\nAppending more content.", (err) => {
        if (err) throw err;
        console.log("content appended,");

        // 5.Rename File

        const newfilepath = path.join(dirPath, "renameExample.txt");
        fs.rename(filepath, newfilepath, (err) => {
          if (err) throw err;
          console.log("file renamed.");

          // 6.Delete File

          fs.unlink(newfilepath, (err) => {
            if (err) throw err;
            console.log("file deleted.");

            //7.Delete Directory

            fs.rm(dirPath, { recursive: true, force: true }, (err) => {
              if (err) throw err;
              console.log("Directory deleted.");
            });
          });
        });
      });
    });
  });
});



app.listen(port,()=>{
    console.log('server running')
})

