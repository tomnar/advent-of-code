const { init } = require('z3-solver');

const raw = `176253337504656, 321166281702430, 134367602892386 @ 190, 8, 338
230532038994496, 112919194224200, 73640306314241 @ 98, 303, 398
326610633825237, 321507930209081, 325769499763335 @ -67, -119, -75`;

const data = raw.split("\n").map((line) => {
  const [x, y, z] = line
    .split(" @ ")[0]
    .split(",")
    .map((n) => parseInt(n, 10));
  const [dx, dy, dz] = line
    .split(" @ ")[1]
    .split(",")
    .map((n) => parseInt(n, 10));
  return [ x, y, z, dx, dy, dz ];
});

console.log(data);
 
function solveSystem() {
    init().then((z3) => {
        const { Context } = z3;
        const { Solver, Int } = new Context('main');
        const solver = new Solver();
        const x = Int.const('x');
        const y = Int.const('y');
        const z = Int.const('z');
        const dx = Int.const('dx');
        const dy = Int.const('dy');
        const dz = Int.const('dz');
        const t = data.map((_, i) => Int.const(`t${i}`))
    
        data.forEach((h, i) => {
            solver.add(t[i].mul(h[3]).add(h[0]).sub(x).sub(t[i].mul(dx)).eq(0))
            solver.add(t[i].mul(h[4]).add(h[1]).sub(y).sub(t[i].mul(dy)).eq(0))
            solver.add(t[i].mul(h[5]).add(h[2]).sub(z).sub(t[i].mul(dz)).eq(0))
        })
        solver.check().then(() => {
            console.log(Number(solver.model().eval(x.add(y).add(z)).value()))
        });
    });
}
solveSystem()