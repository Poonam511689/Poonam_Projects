const fs = require('fs');
const Jimp = require('jimp');
//const { Jimp } = require("jimp");
let file = fs.readFileSync('image.png');
console.log(file);
let str = file.toString('base64');
console.log(str);


fs.writeFileSync('image.txt' , str);


str = fs.readFileSync('image.txt' , {encoding : 'utf-8'});
let buffer = Buffer.from(str , 'base64');
console.log(buffer);

fs.writeFileSync('image.png' , buffer);



Jimp.read('image.png' , (err , image)=>{
    if(err) throw err;
    image
   .resize(256,256)
    .quality(60)
   .write('image-small-bw.jpg');
});

