// const fs = require("fs");

// (async () => {
//   const req = await fetch("https://api.trace.moe/search", {
//     method: "POST",
//     body: fs.readFileSync("testing.jpg"),
//     headers: {
//       "Content-Type": "image/jpeg",
//     },
//   });
//   const res = await req.json();
//   console.log(res);
// })();

// const textToImage = require("text-to-image");
// const path = require("path");

// (async () => {
//   const dataUri = await textToImage.generate("KONTOLLLLLLL", {
//     debug: true,
//     debugFilename: path.join("debug_file.png"),
//     maxWidth: 720,
//     fontSize: 50,
//     fontFamily: "monospace",
//     lineHeight: 100,
//     customHeight: "center",
//     verticalAlign: "bot",
//     textAlign: "center",
//     bgColor: "#333",
//     textColor: "#eaeaea",
//   });
(async () => {
  const req = await fetch("https://ngl.link/api/submit", {
    method: "POST",
    body: "username=romys.12&question=asuuuuuu&deviceId=6fac50e9-2108-4d45-bea4-d958660bdb35&gameSlug=&referrer=",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  console.log(req.status);
  const res = await req.json();
  console.log(res);
})();
