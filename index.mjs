import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';
inquirer
    .prompt([
    {
        name: 'URL',
        message: "Enter the URL you want to convert to QR code: ",
    }
    ])
  .then((answers) => {
    // console.log(answers);
    const url = answers.URL;
    var qr_svg = qr.image(url);
    console.log(qr_svg);
    qr_svg.pipe(fs.createWriteStream('qrImg.png'));
    fs.writeFile  ('url.txt', url, function (err) {
        if (err) throw err;
        console.log('Saved Successfully!');
      } );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });