const interface = require('./interface')
const util = require('util');

// const userArgs = interface();
// const moduleName = userArgs[0];
const moduleName = interface();

// if (userArgs.length > 1) {
//   console.warn('Warning: you provided more than one argument.')
// }

try {
  const moduleToInspect = require(moduleName);

  console.log(util.inspect(moduleToInspect, { colors: true }));
} catch (error) {
  console.error(`Unable to inspect module ${moduleName}.`);
  console.error(`Resason: ${error.message}`);
  process.exitCode = 1;
}
