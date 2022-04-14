const express = require("express");
const app = express();
const routes = require('./routes/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser());
app.use(bodyParser({
    extended: true
}))

require('dotenv').config();

routes(app);

app.listen(PORT, () => {
    console.log(`server run in ${PORT}`);
})