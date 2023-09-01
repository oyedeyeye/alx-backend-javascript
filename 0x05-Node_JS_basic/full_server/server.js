const express = require('express')
const indexRoutes = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

export default app;
