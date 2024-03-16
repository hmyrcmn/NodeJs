function regularFunction() {
  console.log("regular function this.", this);
  setTimeout(function () {
    console.log("regular function callback this,", this);
  }, 1000);
}

regularFunction();

const arrowFunction = () => {
  console.log("arrow Function this", this);
  setTimeout(() => {
    console.log("Arrow function Callback this ", this);
  }, 1000);
};

const obj = {
  value: "Ben bir Nesneyim",
  methodisRegular: function () {
    console.log("regular method this", this);
  },
  methodisArrow: () => {
    console.log("arrow method this", this);
  },
};

obj.methodisRegular();
setTimeout(obj.methodisRegular.bind(obj), 500);
