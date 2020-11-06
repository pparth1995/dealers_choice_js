const express = require('express');
const athletes = require('./athletes')
const athleteList = require('./views/athletelist')
const athletedetails = require('./views/athletedetails')
const time = require('node-time-ago')
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
  if (!post.id) {
    // If the post wasn't found, set the HTTP status to 404 and send Not Found HTML
    res.status(404)
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Basketball Legends</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header><img src="/logo.png"/>Basketball Legends</header>
      <div class="not-found">
        <p>Accio Page! 🧙‍♀️ ... Page Not Found</p>
        <img src="/dumbledore-404.gif" />
      </div>
    </body>
    </html>`
    res.send(html)
  } else {
  res.send(athletedetails.athletedetails(post));}
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
