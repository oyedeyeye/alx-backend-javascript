/**
 * stdin: program to be executed through command line
 */
const msg = 'Welcome to Holberton School, what is your name?';
process.stdout.write(`${msg}\n`);
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});
process.on('beforeExit', () => process.stdout.write('This important software is now closing\n'));
