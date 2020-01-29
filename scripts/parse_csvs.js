/**
 * Parses CSVS 2001-2020
 * @type {module:fs}
 */

const fs = require('fs');
const csv = require('csv-parser');


let files = [];
for (let i = 2001; i <= 2020; i++) {
  files.push(`${i}-01.csv`);
}


files.forEach(file => {
  parseData(file);
});

function parseData(filename) {
  console.log(`parsing ${filename}`);
  const results = [];

  fs.createReadStream(`./csvs/${filename}`)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      const country_data = results.reduce((acc, val) => {
        if (!acc[val.Fed]) {
          acc[val.Fed] = [val];
          return acc;
        }

        acc[val.Fed].push(val);
        return acc;
      }, {});

      for (let countryDataKey in country_data) {
        let data = country_data[countryDataKey];
        let best = data.reduce((a, b) => {
          return a.Rtng < b.Rtng ? b : a;
        });
        country_data[countryDataKey] = {
          count: data.length,
          best: {
            name: best.Name,
            federation: best.Fed,
            rating: Number(best.Rtng)
          },
          average: data.reduce((acc, val) => {
            acc += Number(val.Rtng);
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

    });
}

