const test = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`;

const input = `.....................#......#...................#...............#........................................#..................................
...........................................................#.............................................................#..................
.....................................................................#.........#......#...........#.............#...........................
.....................................................#.......................................#..............................................
......#.................................#..........................................................................................#........
....................#.........#.............................................................................#...............................
..#.........................................................#.............................................................................#.
........................................................................................#...........#..................#....................
........#....................................#........................#.........................................................#...........
..............................................................................#................................#............................
..................................................#............#............................................................................
.........................#......#........#................................................#..........................................#......
......#..............................................................................#...............#......................................
...................................................................#........................................................................
....................#...........................#............................................................#..............#.....#.........
..................................#....................#.........................................#......#..............................#....
.#..........................................................................................................................................
........#.....#........................#...........#.............#.....................#....................................................
..........................#.................................#.....................#.........................................................
.............................................................................................................................#.............#
...................................#......................................................#....................#............................
.....................#...................#............#..................#.............................................#...........#........
..............................................................................................#.............................................
....#..........#...............#..........................................................................#.................................
.............................................#..............................................................................................
...................................................................#..............#.................................#.......................
..................#........................................................#................................................................
..#.................................#...................#..............................#.........................................#.......#..
...............................................................#...............#.....................#..........#.........#.................
.........#......................#.............................................................#.............................................
..............#...............................#.............................................................................................
........................................#.................................#............................................................#....
..............................................................................................................#......#......#...............
.........................#..........#.............................................#........#................................................
....................................................................#.....................................#.................................
....#...............#........#...............................#........................#........................................#............
........................................................#...................................................................................
............................................#...........................#......................#.....#......................................
.........................................................................................#.............................................#....
...........#....................#..................................#.................................................#...........#..........
.#..........................................................................................................................................
................#........................#..........#.......................................................................................
........................#........................................................................................#..........................
........................................................................#.........#...................#...................#.................
........................................................#......................................................................#............
.....#.....................................................................................#................................................
...............#...................................#.................#..............................................................#.......
.........#..................#..................................#..................................................#.........................
......................................#.......#....................................#......................................................#.
..........................................................................................................#......................#..........
...#..............#.......................#.....................................................#...........................................
................................#...............................................#..........#................................................
..........................#......................#......................#...................................................................
..................................................................#................................#........................................
......................................................#.................................#.........................#...................#.....
..............#..........................#..................................................................................#...............
......#......................#.................................................................#...........#................................
.............................................................................#..............................................................
.......................#..........................#......................................................................#..........#.......
.#.................................#................................................................#....................................#..
........#......#................................................#...............................................#...........................
..........................................................................#.....#.........................#...........#.....#...............
............................#..............#..........#....................................#................................................
............................................................................................................................................
............#..........#....................................................................................................................
............................................................#.......................#..............#........................................
.....................................#...............................#...................................#..................................
.........#.....................................................................#.....................................#...............#.....#
#.............#.............................................................................................................................
......................................................#....................................#....................................#...........
...................................................................#............................................#...........................
............................................................................................................................................
....................#............................#................................................#......................................#..
.............................#...................................................#..........................................................
.........................................................................#...............#.................#................................
.............#.........#.........#.....#......................#............................................................#................
............................................................................................................................................
.............................................#..........#.....................#..................................#..........................
............................................................................................................................................
...................................#.............#................#.....#.....................................................#.............
....#.....................#..................................#..............................................................................
............................................................................................................................................
#.....................................#...................................................................................#.................
...............................................#......................#.....#...................................#...........................
.........#...................#.....................................................#.................#......................................
.......................#...............................#........................................#..............................#............
...#.....................................#..................................................................#...............................
...................................................#......................................#...........................................#.....
.................#..........................................................................................................................
...................................................................................................................#......#.................
.................................#..............#.....#......................#.................#.........#..................................
#....................................................................#........................................#...........................#.
............................................................................................................................................
.........................#..................................................................................................................
...............................#.......................................................................................#....................
..........#...................................#..................#.....................#....................#...............................
............................................................................#.....#.........................................................
....#............#............................................................................#.......#..........#..........................
..................................................................................................................................#.........
...................................#...........................................#............................................................
.............................#..........................#.................................#........#........................................
..............#....................................................#........................................#.............#...........#.....
...............................................#.............#.......................................................#......................
........#..............................................................#....................................................................
.......................................................................................#........#...........................................
......................#........#.........................#..................#........................#......................#...............
.#.........#.....#..............................................#........................................................................#..
.....................................................#......................................................................................
.........................................#...........................#..............................................#.......................
.............................................................#................................................#................#............
......#.......................................#.......................................#...............#.....................................
....................#.......#............................#................#...........................................................#.....
...........#.....................................................................................................#..........................
..........................................................................................#..............#..................................
..................................................#..........................................................................#..............
...............#............................................#.....................................................................#.........
........................#...........................................#............................#..................#.......................
................................................................................#..............................#.......................#....
......................................#...................................#..............#..............#...................................
..#............................................#..............#...........................................................#.................
.........#........................#...................#.....................................................................................
.............................#..............................................................................................................
....................................................................................#.......................................................
.........................#.............#............................................................#......#......#.........#......#........
...................#...........................................................................#...........................................#
.......#...............................................#.....#........#..........#..........................................................
..............#....................#........................................................................................................
........................................................................................................#.................#...........#.....
..#...............................................................#.........#.......#.......................................................
.........#......................#..........................#.....................................#............#.............................
...................#.................................#.................................................................#....................
....................................#.......................................................................................................
...........................#......................................................................................................#.........
............................................#.................#............#...................#.......#...................#................
............#.....................................#.........................................................................................
...........................................................................................................#......#.........................
.....................................#..............................................#......#................................................
.........................................................................#..............................................#...................
#....................#........#...................................................................#.....................................#...
.....#........................................#.........#........................#..........................................................`;

const expandFactor = 100000;
const rawUniverse = input.split("\n").map((line) => line.split(""));
const universe = [];
rawUniverse.forEach((line) => {
  if (line.every((cell) => cell === ".")) {
    universe.push(new Array(line.length).fill("*"));
    universe.push(line);
  } else {
    universe.push(line);
  }
});
const emptyColumns = [];
for (let x = 0; x < rawUniverse[0].length; x++) {
  let column = rawUniverse.map((line) => line[x]);
  if (column.every((cell) => cell === ".")) {
    emptyColumns.push(x);
  }
}
emptyColumns.forEach((position, idx) => {
  universe.forEach((line) => {
    line.splice(position + idx, 0, "*");
  });
});

const galaxies = [];
let counter = 0;
universe.forEach((line, y) => {
  line.map((cell, x) => {
    if (cell === "#") {
      counter++;
      galaxies.push({ id: counter, x, y });
    }
  });
});

const pairs = [];
for (let i = 0; i < galaxies.length; i++) {
  for (let j = i + 1; j < galaxies.length; j++) {
    pairs.push([galaxies[i], galaxies[j]]);
  }
}

function generatePath(a, b) {
  const path = [];
  for (let x = a.x; x !== b.x; x += Math.sign(b.x - a.x)) {
      path.push({x, y: a.y});
  }
  for (let y = a.y; y !== b.y; y += Math.sign(b.y - a.y)) {
      path.push({x: b.x, y});
  }
  return path;
}

function calculateDistance(path) {
  const symbols = path.map(p => universe[p.y][p.x]);
  return symbols.reduce((sum, s) => {
    if (s === "*") {
      return sum + expandFactor - 1;
    }
    return sum + 1;
  }, 0);
}

pairs.forEach((pair) => {
  const [a, b] = pair;
  const path = generatePath(a, b);
  const distance = calculateDistance(path);
  pair.distance = distance;
});

const totalDistance = (pairs.reduce((sum, p) => sum + p.distance, 0));
console.log(totalDistance);