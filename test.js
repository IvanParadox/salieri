function loadFile(requestedFile) {

  let rootDirectory = '/frontend/css/';
  const path = require('path');
  console.log(requestedFile);
  let file = path.normalize(requestedFile);
  console.log(file);
  let filename = path.join(rootDirectory, file);
  console.log('THIS:', filename)
  if (filename.indexOf(rootDirectory) !== 0) {
    console.log('trying to sneak out of the web root?');
  }
}

loadFile('/../../xx/');
