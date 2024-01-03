const test = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`;

const raw = `O...#.O.OOO.OO.O.OOO...........OO#..##...#...#.O.#.O....#.##..#.#.OOO.O....#....O...O..OOOO.O#......
O#OO....#O....O..#..###....#.#..#.......#..#.#....O...O.#..O.O#.....#.O#...O.O..##..OO.#...O.O#.....
.O...#..#...##....##....O.OO#O....O.O..#O.....#O.O....#.#O#.#O......#O.....#.O..O.....O.....O...O##.
..O...#OO..O....OO.....OOOO#O.OO..#.........O.O........O..#.........##...O.........O#..O.....#O.OO##
OO.O....#O#..O..#.OO....OO.#.OO...##.O..O..O....OO...O....#.....#..O#OO....#....O.....OO.#.O......OO
#....O...O#..O.O...O...#O#O.#....O.##..#..........OO.#....O#O#..O.OOO.O....O.O.O.O#.O..O..O....O..O.
#.O#..O......OO.#.......O......#.#.O..##..OO..##O.#.O.O#...#.....O.#.O.OO#.O.O#...O.O.#....#.#OOO...
#..O.O.O..O.#.#.#..O#OO.O.O...#.......#...#.#....O.....OO..#.....O....#O...#O..##.O.#....O.....O.O#.
.#O..#........OO.OOO..O...O.O..#O#OO.O.#..#..O.....O.OO..O..#...O......O.O##.O.OO.#..O........#.....
.O.O.O........O..#.O.##....#.#.#..OO..#....O.O.O.O.....#.#..O....OO..O#..O###.OO.OO....#..#..O.##O..
O.O......#..##.O...#O.#OO.#..O..O...O.#OO...O..OO.O.O..OO....O.#.#.O#O#..O.#.#.OOOO..OO.O.O.O.O.#..O
O#.....#OO#....O..#..O##..OO.............#O#OO.##...O.......##......#O....O.#.O......##...........O.
...##.##..#O......#.......#.....#...#O.O.....#...O..O........O...OO.O..#....##....#O....#...O.O....#
..O.....OO.#..#O#.#OO..O.....O.......O.OOO#OOO.....O..O..O#...........##O..O.#...O.OOO..O.##O.#..#.O
.##...OOO.....#.O...#.O......#.O.O....O......#OOO...#..#.#.#.O...O.O.#.O.###.OO##O....O....#.##..#..
O..#.#.........O#...O...O.##..#....O.#..#O...##.OOOO#O#.......#..#.........#OO.##..#......O.##......
..#O...#......O.#.OO..#..O..O#....O.....#....O.#.#......####..##OO.O.O..O...#..#....#..#O#..#.#...O.
............O.......O.....O.#O...#.....###......O...#O....#.OO.##.....#.....O..O.O...O......#O#...OO
..#.O#.#.#..O.OO#.#..#.O.#..O.#.O.O...OO..OO.##..#.#O....O.......OO...O.....#..O..#....O.#...#...OO.
OO...#..#.#..O.OO#O#..##...#...O..#...........O.O.OO.O..#...OO.#.O..O#.#O#.O#.O...O..O...#O..#.O....
..O.O.#....#...#.O.#.O#...##.O#..#O...........O.##...#...#O..O.....#O.#O.....#..##.O..#.O.....#O.O..
.O..OO.O....#OO#....#.###O#..OO..##..#..##.....O.O.O........O.O.O.O#...O..#O#..O........#.O###..O.#.
O.#...O.O.OO#..##....OO...O.....O.O.#O....#...#....##.#..#OO...O#O....O...O.#O....#..#...OO..O.#....
..#...O......O#..O.#..#O#.#OO..#O.O..O..#...#........OOO#.OO.....O##O..#..OO.O##..O..#..O.O...O..O..
...##.#O.###.###...O..#.#O..#..O....O.#O......O.#....O..OOO..O..O..#..O.#.#.....O.#.#...O#.O..O...OO
...O.#....#..O##..#....O..O...O....OO.#.O..#O....#.....#.#........O....O#O.O....O...#.O..#..O.O#OO.O
.##O....#O#O.O.....#.O...........#..O.......#O...###....#O##O...##..OO.#O..#O.O..O.....#.OO#O..#O...
O.O..........O.#..OO.#...O.O..#..........#......O.......#..#O#...#O..##...O...O#.O..........##...#O.
..#..O..O..#O....O.O...#.O..O.#..O#O...O.#......O.#O..#O#....O#..#....##.#.O.#..##.....#.#.#.....O.#
.O##..#.#O.OOO...O.O..OOO..O..#.O..#..#..OO#..OO...O..O..O.O#O.#.....#O.#.#...#O#.O.O.OO..O.......#.
O..O#.OO.#O..O.##..O..OO#.O.....O.O..##....#O...#..#.#O.#O.O#..O...O.#OO#O.O..#.......O.......O.....
..#.#.##O...#.O.O..O...OO.....O#.....O.#...#O.#O.#....##O.....OOO.O..OO....O.O..##....O.O..#.....O.#
.....#.OO.O....O##..##..O...#......#..#..O..O...#O...#............O.#.......#O.O#......##.O.O.#....#
...#O#.#O.##..#.#...O.O...#..........O.O#....O.O..###.#..O...#.#OOO....OO.O.O#O##........#..O.O...O.
..OOO.O..O#..O#OO.#....O.............#....##.#O...O...O##.O..O..##.....O#....#O#...O.O#.O.#..OOO...#
.#.#..O.O.....#O#.....OO#..O.O..O.O............O..#.#.#.#......####.#O#..#..OO.O.OO#..O#.##....O#..O
........##O.#.......OO......O.OO.##..#..O......O#O...#...O.#......#OO..........O..OO...##..#..O.O.O.
..O#.O...#..O..O.##.....O..##....#...O..#.O..#..O.#.OO...###...#..O..O#..O.O..#.#....O#..#.#......O#
...#..#.#.#..#O..OO#..O.O#...........O.........#.O.OO..#.......O#....O.....#OO.....OO..OO...O.O.O.#.
...O#O......#...O...O..#.O.O#.#O.#....#.OO#.....O.O.#...O.#....O.#...#..O#..#..OOO.O..O.....O#....#O
..O..OO...O..#.#.O..#..#.O.#.O##O..OO..O........#....O##...#....#.#O.#..#......#....#.......O.......
#.........#.O#......OO............O.#......OO.O.#.OO.#..OO..O.##........#O#..OO.#...#.#.O.OO.#.O..#.
...O...#O...O....#..O#O#......#..OO#.O##OOO.#..#O.O#..O...O......O#......OOO..#...#O..OO#...........
.#.#..O#..O......#...O....OOO..#..........O....#..##..#...OO#...O.#.O.#.O......#....O##O..#OOO......
...O.##...#..O.......#.#.O..O..#.O.....OOOOOOO...#.....O.....#.....O...OOO.##...O#.OO.OO.#...#O#O...
....#.O..#.O.O..O..O#..O.#.......#....#.#....O.....O#....O##O..O..##.O#..OOO#..O.......#.O..O#OO..O.
##.O.............#.#....O...O.......#O#.....OO#O......O..#.......#.#..#...#.......O.O..O....O.#....#
..O..#O..#...#.........O..#.....O.O.#.....O..#..#O....O..O.....##.#...O..O.#..OO#O#...####.O.......#
.O#.#O#..O#...#.O......OOO.O.#..O.O#.#....####......##.O.O.#...#..#O..O........O.....#........O..#..
.O..O#....O.....O#.O.OOOO##.O..#OO.........##.O.##O...#O...#.O#OO##.....O....O###....###.#.........O
...O##O...O.O..........O#...O#.O...#O..O..##...O#.....O#.O....O...O#.##...#........OOO.O#....OO..###
O.O.O.....O.O..O....O#.OO.O.....O...#..#O#OO...OO..OO.O....#.O.OO....#..O.#O...O...#O#.O#...#.....OO
....#.....##.O#O..#O...OO...O#.#O..#.........OO..#......O..####OOO#...O#.............#.O....O.O..#OO
##O..O.O......O......OOOO..OO##..O........O.....O..O#..OO.O#.O#O#OO#O#..O.O.#..O...O.O.O......##....
..O.O.#..#.O...#.........O..###.#O..O.#..#......#...O##......O.#.O.O##.....O#..........O..O.....O.#.
....#...O.#...#.#.#.#.O.....O.OO#..O...O#..OOO.OO..O.#.........O.......OO..O..#.#...........#.......
O##...#......#OO..O...O..#O.#OO.##.O.O....#.....O.O.....#O.#....#....O.#.OO..##............#O...O.#.
.OO..##....#.OOO...O.O....O..O.........##..O#.O.OO.....#..OO#....O.O#.#..O.OOO...#.....O#...O.O..O.O
O.O...OO#...O.....O..#.O.........O.O.#...OO....#..O.O..OOO.O..#.O.#.##O#.#OOO.#..#O..O............#.
#..O.O..OO.#O.....#.O.#..O.........#.OO..##.O....#O..OO.O.O.O#.O...OO...O..O.O.O.#..O.....#.O.......
O##..O...##....#O..........O..#..O..O.#.#..O..#.O....#OO......##OOO.##......##.....O.#.........#....
..#.....#O..O.O......O..#.......#.OO#.....#.O.....O...O.....O#.......#.....#O...O#.#O.###..O.O..##.O
..O.OO.OO...OO.#.......#....#..#O............O.........O....#OO..O...##..O.O..O..OO..##.........O..O
#...O..#O.O..#O..O...#.O.#......O#....#.....O.##..OOO.....O...O.OO#......O...O..O.###OO...#OO.O.OO.#
O#..O....#O.....O#....O..#.O.###..O.OO.#....#...#.O..#O...O.O..O.O........O..#O.O.O..OOO.O..OO..O.#O
#O#.O....#..#......#.#........O...#......#..#.O........O..O.....#............O#..#O#OO#....O.OOOO#.O
...OOO.O........#..O...........#..#O...#.#OOO#....OO.O....#...##.#...#O...#.....OO.#...O..##.O....O.
O.O......#..#.#...OO..##O#..#O.OOO##...O.#O.......O....OOOO.O..O....#.OO#.O...#..O..O.#....#...O..#O
...O..OOO.#OO..O..#O.#O.O#.O..O....#OO.#..O.O.O.....##O...O.......#O..........##...#............O..#
...O.#......O##......#..#............#O#..O......##.#O.O.#OO....O.#..O...O.....O.O....#O.O.O##.#....
...OO......O#...#.O.#....O.OO.O.##.O..O......#.O.O.O...#O.O.O.O.....##....#...##...#....#OO..#OO#.##
....O....##..##.#.OO....##.....#.....O.O..OO..O...##...#..O##.##......OO.O...OO...OOO..O...##.#.#.O.
#.....O..O.....#.......#.O...........OO..O..O..#......O#.#.OO....#........#..#O.#O#...#..#OOO......O
.O###OO.O##......OO...##O....#..#.....##..#.#OO....#.O.O...#......O....#..O.O..O#O#.###......O....#.
.O..#OO...O#O.....O...#O.O..O..O..##.O..O#.O#.OO..O..O#....O.O.O...OO#....O....O.OOO.O....O...#.##..
.O........OO...#.OOO..O.#O.##..#..........O..........#.O...OO#.#..O.#O##O...#.....#O#.O#.......#....
OO.O.......##..O#OO...#.#.#.#.O..O......#..#OO.#...O............#.#.#.##....O.O..#...OO#.##..#O..O..
O..OO.....#..##.O.#O.....O.O.#...O#.#...#O.OO...O.O..#.##O..OO#..O...##..OO#..O##...O.....#.#..O#.OO
.O...#..#O#..OOO..O#.O#..#O...O.O#.....#...........O.##....O..O...#.OO............O.O#.....#O.O#..O.
..O.O.........#O...#...#..O#.#...#OO##..O#...#.OO#O....OO.O#O......OO...O#O.O....O#O..O#........O..O
#...O....OO.O#..#.#......#.....O#...O.#.O..O...#..O.O..O.O.#OO.O....#....#.......O......O...#.#..#..
.O..OO.O.#O....##O#..O.#O.#.#..#....##.#O...#.O......#.OO#...#O...O.#...O.OO.#.O.#.O...O....#...#...
..OO......O.O....O#..O..##.###.....O.#..##.#.O......O...#...#..O...O.O.#....#.#...O.O.#........#.#..
#...#..#.......#.O.O..#..OO..O.O..OOO.O..O..#......O..O..#OO##....O.#.#.O#O#..O#.##.O...#..#.O....#.
#.O#O.O.OOOO#...#..O#..#O#O..#....O...#.OO.#.###.O.......OO.O..O..OOO.#O.O.........#...#.O..O..O...#
.#.O..##..O...O....O......OO.............O.....OO#O..#.....#.OOO##O.OO........#..#.##..OO..........O
OOOOO....#O.O......O.#O#...#...#.#.#OO.O.#..O..##...##...O.....O...O...O##O..O.#O..O#.O...O.O...OOO.
.O..#..#.#..O.O.##O....#......O#.OOO..O....#O.#.###O.#.#.OO.O.#.OO.........#....#..OO.O.O.O##.#.##..
#O...O..O..O.O.O..........#.#...#O.O......O.O#...OO...#..O..O.....OO...#....#.##......O.........OO.O
..O..##..O.....O.O.....O.O.....O.O...##...O.......#...OO...#..O...#OO.O..#OO..#...#....OO###.O.....O
#...O......#.OO.....O......###..#...#...#.#.....OO#.#.O#..#......O....O.O...#..O#O#..##....#...#....
..O..#O...#.......O##..#.....O#..O#...OO.#..#.O.O..O..O#.#.OO.O.#..O..O..##...#.O....OO#O...........
.###.O.....#...#......#..#.....#..#....#..O.O....O.#..#..#O#.......#.O.O.....OO#.O...#OO.#..OO#.....
.#.....O...#O.........#....##.O......O.OO##...#.....#..#..O##.#...#..O..#O.O..#O...O..O.O...O.....O.
.#....##....O....O..OO....OO..#..#..OO...O..#.O.O..#..O###.O...#O.#.O.O.O.OO........###....OOO.....#
#.#..O..#.O#...#O.....#..O#.OO..O.#..OOO..O..#...O..O......O..#........#.#O#..O..O#OO.##.#.#.....#.O
......#.#.....O#....OO#...O#.#.O.O#.....O...##..###.....O#.....#..OO#.......OO....#...#.O......O....
.........O.#........O...O#.#....O..#..O#OOO..#...O.O.....#.#OO.O.OO......#.....OO#O...O...#...#O..OO
..O#..OO.OO#..O##.O..O.##O....#..O##.......#..O........#.O......#....#O..OOO#..OO.O...#...##O.O...OO
..#.....OOO..O.#O#.O##..##..O#.##..OO...#..O..O..#.OOO...O..O.#..O#..#.OO#..O.OO...OOO..O...O..#....`;

let map = raw.split("\n").map((line) => line.split(""));

function t(map, i) {
  const tInput = map[0].map((_, i) => map.map((row) => row[i]));

  function moveLeft(row, i) {
    if (row[i - 1] === ".") {
      row[i - 1] = "O";
      row[i] = ".";
      // We have moved, check if we need to move more
      if (row[i - 2] === ".") {
        moveLeft(row, i - 1);
      }
    }
  }

  tInput.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === "#" || cell === ".") {
        return;
      }
      moveLeft(row, j);
    });
  });
  const a = tInput[0].map((_, i) => tInput.map((row) => row[i]));

  return a;
}

const ress = [];

for (let i = 0; i < 1000; i++) {
  const c = t(map, i);
  //console.log("~~~res~~~~~~");
  //console.log(c.map((row) => row.join("")).join("\n"));
  const rotated = c.reverse();
  map = rotated[0].map((_, i) => rotated.map((row) => row[i]));
  //console.log("~~~rot~~~~~~");
  //console.log(map.map((row) => row.join("")).join("\n"));
  if (i % 4 === 3) {
    //  console.log("~~~cyc:"+ (((-3 + i) / 4) + 1) + "~~~~~");
    //  console.log(map.map((row) => row.join("")).join("\n"));
    ress.push(map.map((row) => row.join("")).join("\n"));
  }
}

function findLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let len = 2; i + 2 * len <= arr.length; len++) {
      let sequence1 = arr.slice(i, i + len);
      let sequence2 = arr.slice(i + len, i + 2 * len);
      if (sequence1.join(",") === sequence2.join(",")) {
        return { loop: sequence1, start: i, end: i + len - 1 };
      }
    }
  }
  return null;
}

let loop = findLoop(ress);

let totalCalls = 1000000000;
let loopStart = loop.start;
let loopEnd = loop.end;
let loopLength = loopEnd - loopStart;

let remainder = totalCalls % loopLength;

let stateIndex = loopStart + remainder;

console.log(ress.length, loopLength, loopStart, remainder, stateIndex);

const results = [];
for (let i = 0; i < (loopLength * 4); i++) {
  const rockmap = ress[loopStart + i].split("\n").map((line) => line.split(""));
  let res = 0;
  const rows = rockmap.length;
  rockmap.forEach((row, i) => {
    row.forEach((cell) => {
      if (cell === "O") {
        res = res + rows - i;
      }
    });
  });
  results.push(res);
}
console.log(results[(totalCalls - 1 - loopStart - 1) % loopLength - 1]);
