class DataSource {
  //memakai static agar bisa diakses secara langsung tanpa harus membuat instance
  static searchClub(keyword) {
    //mengembalikan nilai promise
    return new Promise((resolve, reject) => {
      const filteredClubs = clubs.filter((club) =>
        club.name.toUpperCase().includes(keyword.toUpperCase())
      );
      if (filteredClubs.length) {
        resolve(filteredClubs);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}
