const handler = (req, res) => {
  console.log(req.get('content-type'));
  res.send('Hello, World')
}

module.exports = handler;