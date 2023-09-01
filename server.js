const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express()
const PORT = process.env.PORT || process.env.PORT || 6003


app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(PORT, () => {
  console.log(`Haircut website is running on port ${PORT}`)
})