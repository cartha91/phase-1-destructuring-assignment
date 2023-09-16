
let farmAnimals = 'cow horse sheep pig chicken';
let [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

farmAnimals = 'cow sheep pig chicken';
let [bessie, dolly, babe, little] = farmAnimals.split(' ');

farmAnimals = 'cow sheep pig';
let [blackAndWhite, black, pink] = farmAnimals.split(' ');

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let [red, orange, yellow, green, blue, indigo, violet] = colors;

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
let [r, o, y, g, b, v] = colors;

colors = ['indigo'];
let [indg] = colors;


let muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

let {muppetName, color, song, job, partner} = muppet;

let nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

let {album: {theMuppetMovie: {song2, song4}}, nestedJob, nestedPartner} = nestedMuppet;