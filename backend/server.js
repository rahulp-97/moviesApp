const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const moviesRoutes = require('./routes/moviesRoutes');


const app = express();

app.use(cors({origin:'http://localhost:3000'}));

app.use('/api/movies', moviesRoutes);

const port = 8000;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});