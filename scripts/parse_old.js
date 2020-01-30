/**
 * Parses all the files from 1975 to 2000 and generate a json dataset for each
 * @type {module:fs}
 */

const fs = require('fs');

// generate the file names
let files = [];
for (let i = 1975; i <= 2000; i++) {
  files.push(`${i}-01.txt`);
}

// execute our parse function on each
files.forEach(file => {
  parseData(file);
});

function parseData(filename) {
  console.log(`parsing ${filename}`);

  // get a vec of all the players
  const players = fs
    .readFileSync(`./data/${filename}`)
    .toString()
    .split('\n')
    .splice(1)
    .filter(line => {
      if (line.length > 5) {
        return true;
      }
    })
    .map(line => line.replace('\r', ' ')) // remove windows formatting
    .map(line => { // pattern match the lines to extract the data with regular expressions
      const federation = line.match(/[A-Z]{3}/gm)[0];
      const rating = line.match(/[^0-9][0-9]{3,4}[^0-9]/gm)[0];
      let name;
      if (['2000-01.txt'].includes(filename)) {
        name = line.slice(10).match(/(([a-zA-Z'-]+)([,. ] ?))*/gm)[0];
      } else {
        name = line.match(/(([a-zA-Z'-]+)([,. ] ?))*/gm)[0];
      }

      return {name, federation, rating: Number(rating.trim())}
    });

  // make a new object with keys that are the federations
  const country_data = players.reduce((acc, val) => {
    if (!acc[val.federation]) {
      acc[val.federation] = [val];
      return acc;
    }

    acc[val.federation].push(val);
    return acc;
  }, {});

  // for each federation get the resulting data
  /**
   * count: number
   * best: {name, rating, federation}
   * average: number
   */
  for (let countryDataKey in country_data) {
    let data = country_data[countryDataKey];
    country_data[countryDataKey] = {
      count: data.length,
      best: data.reduce((a, b) => {
        return a.rating < b.rating ? b : a;
      }),
      average: data.reduce((acc, val) => {
        acc += val.rating;
        return acc;
      }, 0) / data.length,

    }
  }

  // save the file
  fs.writeFile(`./json/${filename.split('.')[0]}.json`, JSON.stringify(country_data), 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log(`${filename.split('.')[0]}.json saved`);
  });

}

