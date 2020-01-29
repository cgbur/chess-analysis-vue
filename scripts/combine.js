const fs = require('fs').promises;


(async () => {
  const files = await fs.readdir('./json/');
  let combined = {};

  await Promise.all(files.map(async file => {
    let json = JSON.parse((await fs.readFile(`./json/${file}`)).toString());
    for (let key in json) {
      key = key.toUpperCase();
      if (!combined[key]) {
        combined[key] = {}
      }
      combined[key][file.split('-')[0]] = json[key];
    }
  }));
  await fs.writeFile(`./combined/combined.json`, JSON.stringify(combined), 'utf8');
  console.log(`combined.json saved`);

})();

