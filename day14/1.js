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

const test2 = `.
O
.
.
.
#
O
.
.
O`;

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

const input = test.split("\n").map((line) => line.split(""));
let tInput = input[0].map((_, i) => input.map((row) => row[i]));

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

const rockmap = tInput[0].map((_, i) => tInput.map((row) => row[i]));

let res = 0;
const rows = rockmap.length;
rockmap.forEach((row, i) => {
  row.forEach((cell) => {
    if (cell === "O") {
      res = res + rows - i;
    }
  });
});

//console.log(rockmap.map((row) => row.join("")).join("\n"));
console.log(res);