const fs = require('fs').promises;


(async () => {
  let result = [`year,fed,best_name,best_rating,num_players`];
  const combined = JSON.parse(
    (await fs.readFile('./combined/combined.json')
    ).toString());

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

