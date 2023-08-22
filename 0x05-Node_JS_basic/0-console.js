/**
 * displayMessage: prints in STDOUT the string argument.
 */
function displayMessage(STDOUT) {
  process.stdout.write(`${STDOUT}\n`);
}

module.exports = displayMessage;
