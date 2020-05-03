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

//negative
function inverseNumber() {
  if (calculator.displayNumber === "0") {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", function (event) {
    //mendapatkan objek elemen yang di klik
    const target = event.target;

    //hapus
    // event.classList untuk melihat nilai class apa saja dalam bentuk array yang ada pada element target,
    //kemudian menggunakan contains() yang merupakan method dari array yang berguna untuk memastikan nilai yang terkandung di dalam array tersebut.
    if (target.classList.contains("clear")) {
      clearCalculator();
      updateDisplay();
      //return statement agar fungsi event handler terhenti
      //sehingga kode yang ada di bawahnya tidak ikut tereksekusi.
      return;
    }

    if (target.classList.contains("equals")) {
      performCalculation();
      updateDisplay();
      return;
    }

    if (target.classList.contains("negative")) {
      inverseNumber();
      updateDisplay();
      return;
    }

    if (target.classList.contains("operator")) {
      handleOperator(target.innerText);
      updateDisplay();
      return;
    }
    inputDigit(target.innerText);
    updateDisplay();
  });
}
