# QR Code Generator

This Node.js application prompts the user to enter a URL and generates a QR code image for the entered URL. The generated QR code image is saved as `qrImg.png`, and the entered URL is saved to a text file named `url.txt`.

## Installation

1. Clone the repository:
   git clone https://github.com/your-username/qr-code-generator.git
2. Navigate to the project directory:   
    cd qr-code-generator
3. Install the dependencies using npm or yarn:
    npm install inquirer
    npm install qr-image
   
## Usage

1. Run the application
   node index.js
2. You will be prompted to enter the URL you want to convert to a QR code. Type in the desired URL and press Enter.
3. The application will generate a QR code image for the entered URL and save it as qrImg.png in the project directory.
4. The entered URL will also be saved to a text file named url.txt.

## Dependencies
1. inquirer: Used for creating interactive command-line prompts.
2. qr-image: Used for generating QR code images.
3. fs: A core Node.js module used for file system operations.
