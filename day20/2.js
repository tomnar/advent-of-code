const test = `broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a`;

const raw = `%mh -> rz
%nd -> jx
%xt -> cx
%dp -> mh
%pz -> zg, bf
%rp -> jb, bf
%jb -> bf, kp
%rj -> xt, cx
%hg -> dl, bf
%pt -> gm, vv
%pf -> xk, qr
%cv -> jp, cx
%zg -> bb
%qn -> gm, bh
%kp -> pz
%kg -> gm, pt
%sl -> rp
%dz -> bf, dc
%hm -> cx, tz
%dc -> fk
%xk -> qr, sf
&kr -> gf
%bq -> qr, mg
%sf -> qr
&cx -> ff, vx, zs
%hr -> fq, gm
%ls -> lf, gm
%mf -> cx, sx
%vq -> gm
%sx -> cx, rj
&gm -> kg, kf, fq, nc, lf
%jx -> qr, zz
%tz -> mf, cx
%jp -> cx, kt
%bb -> hg, bf
%zz -> pf, qr
&qr -> dp, bq, nd, rz, mg, qk, mh
%nc -> gb
%kt -> hm, cx
%mg -> dp
%dl -> bf
&zs -> gf
&bf -> dz, zg, kr, sl, fk, kp, dc
%bh -> vq, gm
&kf -> gf
%fq -> qn
%vl -> vx, cx
&qk -> gf
%fk -> sl
%tj -> nd, qr
%gb -> ls, gm
%lf -> hr
%vx -> cv
%ff -> vl, cx
broadcaster -> kg, dz, ff, bq
%vv -> nc, gm
&gf -> rx
%rz -> tj`;

const conjuctions = [];
const componentsArray = raw.split("\n").map((line) => {
  const data = line.split(" -> ");
  const typeIndicator = data[0].charAt(0);
  const type =
    typeIndicator === "b"
      ? "broadcaster"
      : typeIndicator === "%"
      ? "flip-flop"
      : "conjunction";
  const input = typeIndicator === "b" ? "broadcaster" : data[0].slice(1);
  const output = data[1].split(", ");
  const state = typeIndicator === "%" ? "off" : [];
  const el = { type, input, output, state, name: input };
  if (type === "conjunction") {
    conjuctions.push(el);
  }
  return el;
});

componentsArray.forEach((comp) => {
  comp.output.forEach((output) => {
    const hit = conjuctions.find((conj) => conj.name === output);
    if (hit) {
      hit.state.push({ name: comp.input, state: "low" });
    }
  });
});

const components = componentsArray.reduce((acc, comp) => {
  acc[comp.input] = {
    type: comp.type,
    output: comp.output,
    state: comp.state,
    name: comp.name,
  };
  return acc;
}, {});
const endComponent = componentsArray.find((comp) => {
  return comp.output.find((output) => {
    return components[output] === undefined;
  });
});
const preEndComponents = componentsArray.filter((comp) => {
  return comp.output.find((output) => {
    return output === endComponent.name;
  });
});
const loops = preEndComponents
  .map((comp) => ({
    name: comp.name,
    loop: null,
    start: null,
    end: null,
  }))
  .reduce((acc, comp) => {
    acc[comp.name] = comp;
    return acc;
  }, {});
// NOTE!! We assume that we only need to find the loops that are connected to the end component

let counter = 0;
let currentQueue = [];
let queue = [];
let stop = false; // Lazy stop condition
function doTick(component, signal, origin) {
  if (!component) return;
  switch (component.type) {
    case "broadcaster":
      component.output.forEach((output) => {
        queue.push([components[output], "low", component.name]);
      });
      break;
    case "flip-flop":
      if (signal === "low") {
        component.state = component.state === "off" ? "on" : "off";
        if (component.state === "on") {
          component.output.forEach((output) => {
            queue.push([components[output], "high", component.name]);
          });
        } else {
          component.output.forEach((output) => {
            queue.push([components[output], "low", component.name]);
          });
        }
      }
      break;
    case "conjunction":
      const hit = component.state.find((input) => input.name === origin);
      hit.state = signal;
      if (component.state.every((input) => input.state === "high")) {
        component.output.forEach((output) => {
          queue.push([components[output], "low", component.name]);
        });
      } else {
        const loopComponent = loops[component.name];
        if(loopComponent && loopComponent.loop === null) {
          if (loopComponent.start === null) {
            loopComponent.start = counter;
          } 
          else {
            loopComponent.end = counter;
            loopComponent.loop = loopComponent.end - loopComponent.start;
          }
          if(Object.values(loops).filter(loop => loop.loop === null).length === 0) {
            stop = true;
          };
        }
        component.output.forEach((output) => {
          queue.push([components[output], "high", component.name]);
        });
      }
      break;
  }
}

function loopCommands() {
  if (stop) {
    currentQueue = [];
  }
  currentQueue.forEach(([component, signal, origin]) => {
    doTick(component, signal, origin);
  });
  currentQueue = queue;
  queue = [];
  if (currentQueue.length > 0) {
    loopCommands();
  }
}

for (let i = 0; i < 5000000; i++) {
  currentQueue.push([components["broadcaster"], "low", "button"]);
  loopCommands();
  counter++;
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

const periods = Object.values(loops).map((loop) => loop.loop);
let result = periods[0];

for (let i = 1; i < periods.length; i++) {
  result = lcm(result, periods[i]);
}

console.log(result);

/*
// visualization: https://dreampuf.github.io/GraphvizOnline/
const vComps = [];
const visualization = componentsArray.forEach((comp) => {
  comp.output.forEach((output) => {
    vComps.push(`${comp.name} -> ${output}`);
  });
});
vComps.forEach((comp) => {
  console.log(comp);
});
*/