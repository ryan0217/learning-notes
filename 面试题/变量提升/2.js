console.log(a);
var a = 12;

function fn() {
  console.log(a);
  a = 13;
}

fn();
console.log(a);
// undefined 12 13
