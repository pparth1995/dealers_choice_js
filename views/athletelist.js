const time = require('node-time-ago')


const athleteList = (post)=>{
  return `<html>
  <head>
    <title>Basketball Legends</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="athlete-list">
      <header><img src="/nbalogo.jpg"/>Basketball Legends</header>
      ${post.map(post => `
        <div class='athlete-item'>
          <p>
          <a href="/posts/${post.id}">${post.name}</a>
          <small>
          ${post.description}
           </small>
        </div>`
      ).join('')}
    </div>
  </body>
  </html>`
}

module.exports = { athleteList: athleteList };