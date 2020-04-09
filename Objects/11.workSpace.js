function factory(val1, val2) {
  return {
    prop1: val1,
    prop2: val2
  };
}

let obj = factory("value1", "value2");
let obj2 = factory("value3", "value4");
console.log(obj, obj2);

function Const(val1, val2) {
  this.prop1 = val1;
  this.prop2 = val2;
}

let obj3 = new Const("value5", "value6");
let obj4 = new Const("value7", "value8");
console.log(`Constructor func :`, obj3, obj4);
