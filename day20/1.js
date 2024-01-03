const test = `broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a`;

const test2 = `broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`;

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
  if(type === "conjunction") {
    conjuctions.push(el);
  }
  return el;
});


componentsArray.forEach((comp) => {
  comp.output.forEach((output) => {
    const hit = conjuctions.find((conj) => conj.name === output);
    if (hit) {
      hit.state.push({ name: comp.input, state: 'low' });
    }
  })
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

let ticksLow = 0;
let ticksHigh = 0;
function doTick(component, signal, origin) {
  if (signal === "low") ticksLow++;
  else ticksHigh++;
  if (!component) return;
  switch (component.type) {
    case "broadcaster":
      component.output.forEach((output) => {
        doTick(components[output], "low", component.name);
      });
      break;
    case "flip-flop":
      if (signal === "low") {
        component.state = component.state === "off" ? "on" : "off";
        if (component.state === "on") {
          component.output.forEach((output) => {
            doTick(components[output], "high", component.name);
          });
        } else {
          component.output.forEach((output) => {
            doTick(components[output], "low", component.name);
          });
        }
      }
      break;
    case "conjunction":
      const hit = component.state.find((input) => input.name === origin);
      hit.state = signal;
      if (component.state.every((input) => input.state === "high")) {
        component.output.forEach((output) => {
          doTick(components[output], "low", component.name);
        });
      } else {
        component.output.forEach((output) => {
          doTick(components[output], "high", component.name);
        });
      }
      break;
  }
}

for (let i = 0; i < 1000; i++) {
  doTick(components["broadcaster"], "low", "button");
}

console.log(ticksLow * ticksHigh);
