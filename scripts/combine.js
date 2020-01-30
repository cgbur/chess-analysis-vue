/**
 * Combines all the files in the /json/ directory into one large dataset
 * @type {promises}
 */

const fs = require('fs').promises;


(async () => {
  // get a list of all the files in the json directory
  const files = await fs.readdir('./json/');

  // result object were all the consolidated data will be
  let combined = {};

  // async / await for performance reasons
  await Promise.all(files.map(async file => {
    // get the json for a given file. Parse it so it can be used
    let json = JSON.parse((await fs.readFile(`./json/${file}`)).toString());

    // iterate over the keys (federations in this case)
    for (let key in json) {
      key = key.toUpperCase();
      // if the key is not in the combined set, add it
      if (!combined[key]) {
        combined[key] = {}
      }
      // add the years to the set.
      combined[key][file.split('-')[0]] = json[key];
    }
  }));

  // save the file
  await fs.writeFile(`./combined/combined.json`, JSON.stringify(combined), 'utf8');
  console.log(`combined.json saved`);

})();

