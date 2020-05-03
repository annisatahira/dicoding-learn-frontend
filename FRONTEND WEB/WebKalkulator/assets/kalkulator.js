//objek baru menggambarkan data dan kondisi kalkulator
const calculator = {
  //angka yang muncul pada layar
  displayNumber: "0",
  operator: null,
  //properti akan diberikan nilai ketika pengguna melakukan aksi
  firsNumber: null,
  //kondisi kalkulator menunggu pengguna menetukan angka kedua u/ perhitungan
  waitingForSecondNumber: false,
};

//kumpulan fungsi umum yang dilakukan kalkulator
function updateDisplay() {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.firsNumber = null;
  calculator.waitingForSecondNumber = false;
}

//fungsi menambah angka
function inputDigit(digit) {
  if (calculator.displayNumber === "0") {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", function (event) {
    //mendapatkan objek elemen yang di klik
    const target = event.target;

    inputDigit(target.innerText);
    updateDisplay();
  });
}
