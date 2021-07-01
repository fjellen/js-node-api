const express = require("express");

const app = express();
const port = 3000;


const songs = [
  {
    artist: "The beatles",
    lyrics: "Obladi oblada life goes on da da da"
  },
  {
    artist: "Sebastian Karlsson",
    lyrics: "Bla bla bla hej hej hej yo yo yo"
  },
  {
    artist: "Avicii",
    lyrics: "Oh oh sometimes I get a good feeling"
  }
];

function search(text) {
  return songs.filter(function(song){
    return song.artist.toLowerCase().includes(text.toLowerCase());
  });
}


app.get("/", function(request, response){
  const artist = request.query.artist;

  if (!artist)  {
    response.json([]);
  } else {
    const results = search(artist);
    response.json(results);
  }
});

// rack upp handen nar felet ar borta
const path = require('path');

app.get("/website", function(request, response){
  response.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get("/main.js", function(request, response){
  response.sendFile(path.join(__dirname, 'public/main.js'));
});


app.listen(port, function(){
  console.log(`http://localhost:${port}`);
});