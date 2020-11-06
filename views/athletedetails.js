
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
          Age ${post.age}, Height ${post.height}
          </p>
          <p>
            Championships ${post.rings} 
          </p>
          <p>
          College ${post.college} 
        </p>
        
        </div>
      
    </div>
  </body>
</html>`
}

module.exports = { athletedetails: athletedetails};