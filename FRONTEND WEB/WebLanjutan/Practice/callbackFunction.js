const getCake = (callback) => {
  let cake = null;
  console.log("Sedang membuat cake...");
  setTimeout(() => {
    cake = "Kue Selesai";
    callback(cake);
  }, 3000);
};

//menggunakan function getCake
getCake((cake) => {
  console.log(cake);
});
