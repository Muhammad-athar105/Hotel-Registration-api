// app.js

require('dotenv').config();
const express = require('express');
const app = express();
const hotelRoutes = require('./routes/hotelRoutes');

app.use(express.json());

app.use('/hotels', hotelRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
