const express = require('express');


const app = express();

const router = express.Router({
  caseSensitive: false
});

app.use(router)


 router.get('/home', (req, res) => {
  res.send('This is home page')
})

app.post('/', (req, res) => { 
  res.send('This is home page with post request')
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})
