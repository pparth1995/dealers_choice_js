const express = require('express');
const athletes = require('./athletes')
const athleteList = require('./views/athletelist')
const athletedetails = require('./views/athletedetails')

const app = express();


app.use(express.static('./public'))



app.get("/", (req, res, next) => {
  const posts = athletes.list()

  
  res.send(athleteList.athleteList(posts))
});

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = athletes.find(id);
  console.log(post)   
  res.send(athletedetails.athletedetails(post));
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
