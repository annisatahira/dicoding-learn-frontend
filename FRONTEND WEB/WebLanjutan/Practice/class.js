class Car {
  //membuat Constructor
  constructor(manufactur, color) {
    this.manufactur = manufactur;
    this.color = color;
    this.engineActive = false;
  }

  //method atau prototype
  startEngine() {
    console.log(`Mobil dinyalakan..`);
    this.engineActive = true;
  }

  info() {
    console.log(`Manufacture: ${this.manufacture}`);
    console.log(`Color: ${this.color} `);
    console.log(`Engines: ${this.engineActive ? "Active" : "Inactive"}`);
  }
}

//buat instance dari class Car
const johnCar = new Car("Honda", "Black");
johnCar.startEngine();
johnCar.info();
