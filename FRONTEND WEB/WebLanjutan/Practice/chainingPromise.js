// code coffe stock
const state = {
  isCoffeMakerReady: true,
  seedStock: {
    arabica: 250,
    robusta: 60,
    liberica: 80,
  },
};

//ambil biji coffe melalui function getSeed
const getSeeds = (type, miligrams) => {
  return new Promise((resolve, reject) => {
    if (state.seedStock[type] >= miligrams) {
      state.seedStock[type] -= miligrams;
      resolve("Biji Kopi Didapatkan");
    } else {
      reject("Maaf Stock Kopi Habis");
    }
  });
};

//function mebuat coffee
const makeCoffee = (seeds) => {
  return new Promise((resolve, reject) => {
    if (state.isCoffeMakerReady) {
      resolve("Kopi berhasil dibuat");
    } else {
      reject("Maaf mesin tidak dapat digunakan");
    }
  });
};

//function serve to table
const servingToTable = (coffee) => {
  return new Promise((resolve) => {
    resolve("Pesanan kopi sudah selesai");
  });
};

//function reserved a coffee
function reserveACoffee(type, miligrams) {
  getSeeds(type, miligrams)
    .then(makeCoffee)
    .then(servingToTable)
    .then((resolveValue) => {
      console.log(resolveValue);
    })
    .catch((RejectedReason) => {
      console.log(RejectedReason);
    });
}
