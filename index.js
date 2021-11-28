const express = require("express");

const app = express();

app.set('view engine', 'ejs')

app.get('/test', (req, res) => {
  res.send('Hello, World')
})

app.get('/about', (req, res) => {
  res.set('platform', 'Learn with Jwolt')
  console.log(res.get('platform'));
  res.end()
})
app.listen(3000, () => {
  console.log("listening on port 3000");
});
