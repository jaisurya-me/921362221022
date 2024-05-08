
const express = require('express');
const app = express();
const port = 9876;

app.get('/numbers/e', (req, res) => {
  res.send(' number  is approximately 2.71828');
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
