require('dotenv').config('');
const app = require('./src/app');

const port = process.env.PORT;
app.listen(port, () => {
  console.info(`=================================`);
  console.info(`🚀 App listening on the port ${port}`);
  console.info(`=================================`);
});
