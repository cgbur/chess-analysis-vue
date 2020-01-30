/**
 * converts the large json dataset into a csv format
 * @type {promises}
 */

const fs = require('fs').promises;


(async () => {
  // table header
  let result = [`year,fed,best_name,best_rating,num_players`];

  // read in the json dataset
  const combined = JSON.parse(
    (await fs.readFile('./combined/combined.json')
    ).toString());

  // get all the data and push as new lines
  for (let fed in combined) {
    for (let year in combined[fed]){
      const bestName = combined[fed][year].best.name;
      const bestRating = combined[fed][year].best.rating;
      const count = combined[fed][year].count;
      result.push(`${year},${fed},"${bestName}",${bestRating},${count}`);
    }
  }

  await fs.writeFile(`./combined/combined.csv`, result.join('\n'), 'utf8');
  console.log(`combined.json saved`);

})();

