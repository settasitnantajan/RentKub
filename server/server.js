const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const { readdirSync } = require('fs');

const campingRoute = require('./routes/camping');
const profileRoute = require('./routes/profile');
const handleError = require('./middlewares/error');



app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

// app.use('/api',campingRoute)
// app.use('/api',profileRoute)

app.use(handleError);

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
