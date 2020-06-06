class SearchData {
  //memakai static agar bisa diakses secara langsung tanpa harus membuat instance
  static searchMeal(keyword) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.meals) {
          return Promise.resolve(responseJson.meals);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default SearchData;
