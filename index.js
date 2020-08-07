const webp = require("webp-converter");
const path = require("path");
var fs = require("fs");
var domain = require("domain").create();

fs.readdir("arquivos", function (error, files) {
  for (let i = 0; i < files.length; i++) {
    if (path.extname(files[i]) == ".webp") {
      const result = webp.dwebp(
        `arquivos/${files[i]}`,
        `assets/arquivo${i}.jpg`,
        "-o"
      );
      result.then((response) => {
        console.log(response);
      });
    }
  }

  console.log(files);
});

domain.on("error", function (erros) {
  console.log(erros);
});
