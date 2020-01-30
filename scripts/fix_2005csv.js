/**
 * fixes a problem we had with the 2005 data
 * @type {promises}
 */
const fs = require('fs').promises;


(async () => {
  let lines = (await fs.readFile(`./csvs/2005-01.csv`))
    .toString()
    .replace('\r', '')
    .split('\n');
  let fixed = lines.map(line => {
    // looking for a pattern in bad data to fix
    let match = line.match(/,[a-z] {2}[A-Z]{3},/gm);
    if (match != null) {
      const index = line.indexOf(match[0]);
      // fix the error in spacing and commas
      return line.slice(0, index) + ',' + line.slice(index + 4, line.length)
    }
    return line
  });

  await fs.writeFile(`./csvs/2005-01.csv`, fixed.join('\n'), 'utf8');
  console.log(`2005-01.csv saved`);

})();
