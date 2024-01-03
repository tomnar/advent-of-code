const raw = `Time:        61709066
Distance:   643118413621041`;

const test = `Time:      71530
Distance:  940200`;

const lines = raw.split("\n");
const times = lines[0].split(/\s+/).slice(1).map(Number);
const distances = lines[1].split(/\s+/).slice(1).map(Number);

const races = times.map((time, i) => ({ time, distance: distances[i] }));

const winTimes = races.map((race) => {
  const winners = [];
  for (let timePressed = 0; timePressed < race.time + 1; timePressed++) {
    const remainingTime = race.time - timePressed;
    const distanceTravelled = remainingTime * timePressed;
    if (distanceTravelled > race.distance) {
      winners.push(timePressed);
    }
  }
  return winners;
});

const calculateWinners = winTimes.map((winners) => winners.length).reduce((a, b) => a * b, 1);

console.log(calculateWinners);
