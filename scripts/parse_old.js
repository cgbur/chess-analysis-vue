/**
 * ONLY PARSES UP TO AND INCLUDING 2000
 * @type {module:fs}
 */

const fs = require('fs');

let files = [];
for (let i = 1975; i <= 2000; i++) {
  files.push(`${i}-01.txt`);
}


files.forEach(file => {
  parseData(file);
});

function parseData(filename) {
  console.log(`parsing ${filename}`);
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
    .map(line => line.replace('\r', ' '))

    .map(line => {
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


  const country_data = players.reduce((acc, val) => {
    if (!acc[val.federation]) {
      acc[val.federation] = [val];
      return acc;
    }

    acc[val.federation].push(val);
    return acc;
  }, {});

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

  fs.writeFile(`./json/${filename.split('.')[0]}.json`, JSON.stringify(country_data), 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log(`${filename.split('.')[0]}.json saved`);
  });

}

