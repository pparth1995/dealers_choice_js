const data = [
    { id: 1, name: "Michael Jordan", height: "6' 6''", age: "57", college: "UNC", rings: "6", picture: 'mj.jpeg', description: 'One of the greatest to play. Great competitor, plays through illnesses, put the bulls on the map'},
    { id: 2, name: "Lebron James", height: "6' 9''", age: "35", college: " St. Vincent–St. Mary HS", rings: "4", picture:'lbj.jpeg', description: 'The literal GOAT. Best to play ever, no discussion' },
    { id: 3, name: "Dwayne Wade", height: "6' 4''", age: "38", college: "Marquette", rings: "3",picture:'dwade.jpg', description: 'One of the best SG ever, dependable, carried the team on his back in the 2006 finals' },
    { id: 4, name: "Kobe Bryant", height: "6' 6''", age: "41 RIP", college: "Lower Merion HS", rings: "5",picture: 'kobe.jpeg', description: 'RIP. One of the most clutch players ever to play. Impacted the world on and off the court. Mamba Mentality'},
    { id: 5, name: "Shaquille O'Neal", height: "7' 1''", age: "48", college: "LSU", rings: "4",picture: 'shaq.jpeg', description: 'Self proclaimed superman. Absolute beast in the paint. One of the most dominant players ever'},
    { id: 6, name: "Vince Carter", height: "6' 6''", age: "43", college: "UNC", rings: "0",picture: 'vince.jpg', description: 'Best dunker of all time no CAP'}  
  ];

const list = () => {
    return [...data] // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
}; 
  
const find = (id) => {
    const post = data.find(post => post.id === +id);
    return {...post}; // Again, we copy the post data before returning so the original information is safe.
}
  
module.exports = { list: list, find: find };