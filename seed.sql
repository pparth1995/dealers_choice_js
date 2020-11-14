
DROP TABLE IF EXISTS users, players;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT DEFAULT NULL,
   descrip TEXT DEFAULT NULL
);

CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES users(id) NOT NULL,
  height text DEFAULT NULL,
  age TEXT DEFAULT NULL,
  college TEXT DEFAULT NULL,
  rings TEXT DEFAULT NULL,
  picture TEXT DEFAULT NULL

);

INSERT INTO users (name,descrip) VALUES ('Michael Jordon', 'One of the greatest to play. Great competitor, plays through illnesses, put the bulls on the map');
INSERT INTO users (name,descrip) VALUES ('Lebron James', 'The literal GOAT. Best to play ever, no discussion');
INSERT INTO users (name,descrip) VALUES ('Dwayne Wade','One of the best SG ever, dependable, carried the team on his back in the 2006 finals');
INSERT INTO users (name,descrip) VALUES ('Kobe Bryant','RIP. One of the most clutch players ever to play. Impacted the world on and off the court. Mamba Mentality');
INSERT INTO users (name,descrip) VALUES ('Shaquille ONeal','Self proclaimed superman. Absolute beast in the paint. One of the most dominant players ever');
INSERT INTO users (name,descrip) VALUES ('Vince Carter','Best dunker of all time no CAP');

INSERT INTO players (userId, height, age, college, rings, picture) VALUES ((SELECT id from users where name='Michael Jordon'), '6 6', '57', 'UNC', '6', 'mj.jpeg');
INSERT INTO players (userId, height, age, college, rings, picture) VALUES ((SELECT id from users where name='Lebron James'),'6 9', '35', ' St. Vincent–St. Mary HS', '4','lbj.jpeg' );
INSERT INTO players (userId, height, age, college, rings, picture) VALUES ((SELECT id from users where name='Dwayne Wade'), '6 4', '38', 'Marquette', '3', 'dwade.jpg' );
INSERT INTO players (userId, height, age, college, rings, picture) VALUES ((SELECT id from users where name='Kobe Bryant'), '6 6',  '41 RIP', 'Lower Merion HS', '5','kobe.jpeg' );
INSERT INTO players (userId, height, age, college, rings, picture) VALUES ((SELECT id from users where name='Shaquille ONeal'),'7 1', '48','LSU','4', 'shaq.jpeg');
INSERT INTO players (userId, height, age, college, rings, picture) VALUES ((SELECT id from users where name='Vince Carter'), '6 6', '43', 'UNC', '0', 'vince.jpg');



