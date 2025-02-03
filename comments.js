//Create web server with express
const express = require('express');
const app = express();
const port = 3000;
//Create a route
app.get('/comments', (req, res) => {
  res.send('Comments Page');
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});