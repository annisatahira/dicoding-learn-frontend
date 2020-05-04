//key untuk mengakses dan menyimpan data pada local storage
const CACHE_KEY = "calculation_history";

//mengembalikan nilai boolean dari pengecakan fitur storage
function checkForStorage() {
  return typeof Storage !== "undefined";
}

//fungsi untuk menyimpan data riwayat kalkulasi pada local Storage
function putHistory(data) {
  if (checkForStorage()) {
    let historyData = null;
    if (localStorage.getItem(CACHE_KEY) === null) {
      historyData = [];
    } else {
      //JSON.parse() mengubah nilai objek dalam bentuk string
      //kembali pada bentuk objek javascript
      historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
    }

    //unshift u. menambahkan nilai baru pada array
    //yg ditempatkan di awal index
    historyData.unshift(data);

    if (historyData.length > 5) {
      historyData.pop();
    }

    //JSON.stringfy() digunakan untuk mengubah objek JS menjadi string
    //localStorage hanya dapat menyimpan data primitif seperti string,
    //sehingga kita perlu mengubah objek ke dalam bentuk string
    //jika ingin menyimpan ke dalam localStorage.
    localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
  }
}

//fungsi mendapatkan data dari localStorage
function showHistory() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
  } else {
    return [];
  }
}

//fungsi untuk merender data riwayat kalkulasi

function renderHistory() {
  const historyData = showHistory();
  let historyList = document.querySelector("#historyList");

  //hapus konten html pada elemen history agar
  //tdk menampilkan data ganda
  historyList.innerHTML = "";

  for (let history of historyData) {
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + history.firstNumber + "</td>";
    row.innerHTML += "<td>" + history.operator + "</td>";
    row.innerHTML += "<td>" + history.secondNumber + "</td>";
    row.innerHTML += "<td>" + history.result + "</td>";

    historyList.appendChild(row);
  }
}

//panggil fungsi renderHistory(); agar data history muncul ketika website pertama kali dijalankan.

renderHistory();
