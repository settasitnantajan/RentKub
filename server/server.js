const express = require('express');
const cors = require('cors');
const app = express();

const campingRoute = require('./routes/camping')


app.use(cors());
app.use(express.json());

app.use('/api',campingRoute)


const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
