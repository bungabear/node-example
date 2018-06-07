const sharp = require('sharp');
const path = require('path');

let image = path.join(__dirname, 'images', '1.jpg');
sharp(image)
  // width size for resized image
  .resize(1080)
  // out to file path
  .toFile('output.jpg', function(err) {
    if(err){
      console.log(err);
    }
 });
