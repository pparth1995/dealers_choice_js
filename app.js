const express = require('express');

const athletes = require('./athletes')
const athleteList = require('./views/athletelist')
const athletedetails = require('./views/athletedetails')


const client = require('./db');
const app = express();



app.use(express.static('./public'))



app.get("/", async (req, res, next) => {
  const data = await client.query('SELECT * FROM users');
const posts = data.rows;
console.log(posts)
res.send(athleteList.athleteList(posts));
  

});

app.get('/posts/:id', async(req, res) => {
  
  const data = await client.query('select * from players INNER JOIN users ON players.id=users.id');
 
  const posts = data.rows;
  console.log(posts)
  res.send(athletedetails.athletedetails(posts));
  
  
  
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
