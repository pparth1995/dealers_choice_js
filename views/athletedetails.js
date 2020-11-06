
const athletedetails = (post)=>{
  return `<html>
  <head>
    <title>${post.name}</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <div class="athlete-list">
      <header><img src="/nbalogo.jpg"/>${post.name}</header>
        <div class='athlete-item'>
          <p>
          <img src="/${post.picture}"/>
            
          </p>
          <p>
          <b>Age</b> ${post.age}
          </p>
          <p>
           <b>Height: </b>${post.height}
          </p>
          <p>
          <b> Championships: </b>${post.rings} 
          </p>
          <p>
          <b>College:</b> ${post.college} 
        </p>
        
        </div>
      
    </div>
  </body>
</html>`
}

module.exports = { athletedetails: athletedetails};