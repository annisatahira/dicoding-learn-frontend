// const upperizedNames = ["Annisa", "Tahira"].map(function (name) {
//   return name.toLocaleUpperCase();
// });

//menggunakan arrow function
// const upperizedNames = ["Annisa", "Tahira"].map((name) => name.toUpperCase());

// console.log(...upperizedNames);

const sayHello = (language) => {
  if (language.toUpperCase() === "INDONESIA") {
    return "Selamat Pagi";
  } else {
    return "Morning";
  }
};

console.log(sayHello("indonesia"));
