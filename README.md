# Advent of code 2023
My solutions for [Advent of Code 2023](https://adventofcode.com/2023) written in plain javascript.  
Each day has its own folder, with a script for each task.

## Scoring
Total score: **0** ([all](stats/personal_times.md))  
Private leaderboard: **1st** ([board](stats/private_leaderboard.md))   
Best rank: **1527** ([24](https://adventofcode.com/2023/day/24))  
Best time: **00:25:58** ([15](https://adventofcode.com/2023/day/15))

## Code style
Chaotic. The purpose of these tasks is to finish them quickly.  
Do not assume that this is how I write code in my daily work ;-)

## "Cheat" days
My goal was to solve all challenges without external help from other participants, e.g. from the great [AoC reddit board](https://www.reddit.com/r/adventofcode/?f=flair_name%3A%22SOLUTION%20MEGATHREAD%22).  
I was also not allowed to use any external dependencies as part of the solution.  
I allowed myself to "cheat" if I was stuck for more than 5 hours. This happened **4** times:
- ([12:2](https://adventofcode.com/2023/day/12)): Was stuck. A guide suggested to use a cache for done calculations. That solved it.
- ([21:2](https://adventofcode.com/2023/day/21)): Was stuck on the math. Found a video explaining the logic using python.
- ([24:2](https://adventofcode.com/2023/day/24)): Had to use z3 dependency to solve the functions.
- ([25:1](https://adventofcode.com/2023/day/25)): Used Graphviz to visualize graph.

## How to run
All tasks are solved by using plain javascript (except for day 24 which uses [z3](https://www.npmjs.com/package/z3-solver) and day 25 which uses [Graphviz](https://graphviz.org/)  
You can run them in your browser or by installing [node.js](https://nodejs.org/en), whereafter you can run them locally through your command line by writing `node 1.js`.

## Credit
[Advent of code](https://adventofcode.com/2023/about) is provided by [Eric Wastl](https://twitter.com/ericwastl).