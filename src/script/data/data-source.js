function data() {
  const baseUrl = "https://www.themealdb.com/api/json/v1/1";

  const getCategoryMeal = async () => {
    try {
      const response = await fetch(`${baseUrl}/categories.php`);
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponeMessage(responseJson.message);
      } else {
        renderAllCategoryMeals(responseJson.meals);
      }
    } catch (error) {
      showResponeMessage(error);
    }
  };

  const showResponeMessage = (message = "Check Your Connection") => {
    alert(message);
  };
}

export default data;
