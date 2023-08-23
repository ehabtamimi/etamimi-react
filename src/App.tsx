import React, { useState } from "react";
import { Button } from "react-bootstrap";

const App = () => {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [excludeCuisine, setExcludeCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [intolerances, setIntolerances] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");
  const [minCarbs, setMinCarbs] = useState("");
  const [maxCarbs, setMaxCarbs] = useState("");
  const [minProtein, setMinProtein] = useState("");
  const [maxProtein, setMaxProtein] = useState("");
  const [minCalories, setMinCalories] = useState("");
  const [maxCalories, setMaxCalories] = useState("");
  const [minFat, setMinFat] = useState("");
  const [maxFat, setMaxFat] = useState("");
  const [fillIngredients, setFillIngredients] = useState(false);

  const [results, setResults] = useState([]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data: any = {
      query: query,
      cuisine: cuisine,
      excludeCuisine: excludeCuisine,
      diet: diet,
      intolerances: intolerances,
      type: type,
      sort: sort,
      minCarbs: minCarbs,
      maxCarbs: maxCarbs,
      minProtein: minProtein,
      maxProtein: maxProtein,
      minCalories: minCalories,
      maxCalories: maxCalories,
      minFat: minFat,
      maxFat: maxFat,
      fillIngredients: fillIngredients,
      apiKey: "43cce9df2ced467e8d49f23b16f0adfe",
    };

    const params = new URLSearchParams(data);

    var keysForDel = [""];
    params.forEach((value, key) => {
      if (value == "") {
        keysForDel.push(key);
      }
    });

    keysForDel.forEach((key) => {
      params.delete(key);
    });

    try {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?" +
          params.toString(),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setResults(responseData.results);
      } else {
        console.log("Failed to send data");
      }
    } catch (error: any) {
      console.log("Error: " + error.message);
    }
  };

  return (
    <div>
      <header>
        <img
          src={`${window.location.href}\nutrition_header.png`}
          className="img-fluid"
        />
      </header>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="input-group-text">Query: </span>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Query"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Cuisine: </span>
          <select
            className="form-control"
            name="cuisine"
            id="cuisine"
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option value="">Select Cuisine</option>
            <option value="African">African</option>
            <option value="Asian">Asian</option>
            <option value="American">American</option>
            <option value="British">British</option>
            <option value="Cajun">Cajun</option>
            <option value="Caribbean">Caribbean</option>
            <option value="Chinese">Chinese</option>
            <option value="Eastern European">Eastern European</option>
            <option value="European">European</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Greek">Greek</option>
            <option value="Indian">Indian</option>
            <option value="Irish">Irish</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Jewish">Jewish</option>
            <option value="Korean">Korean</option>
            <option value="Latin American">Latin American</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="Nordic">Nordic</option>
            <option value="Southern">Southern</option>
            <option value="Spanish">Spanish</option>
            <option value="Thai">Thai</option>
            <option value="Vietnamese">Vietnamese</option>
          </select>
        </div>
        <div className="input-group">
          <span className="input-group-text">excludeCuisine: </span>
          <select
            className="form-control"
            name="excludeCuisine"
            id="excludeCuisine"
            onChange={(e) => setExcludeCuisine(e.target.value)}
          >
            <option value="">Exclude Cuisine</option>
            <option value="African">African</option>
            <option value="Asian">Asian</option>
            <option value="American">American</option>
            <option value="British">British</option>
            <option value="Cajun">Cajun</option>
            <option value="Caribbean">Caribbean</option>
            <option value="Chinese">Chinese</option>
            <option value="Eastern European">Eastern European</option>
            <option value="European">European</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Greek">Greek</option>
            <option value="Indian">Indian</option>
            <option value="Irish">Irish</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Jewish">Jewish</option>
            <option value="Korean">Korean</option>
            <option value="Latin American">Latin American</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="Nordic">Nordic</option>
            <option value="Southern">Southern</option>
            <option value="Spanish">Spanish</option>
            <option value="Thai">Thai</option>
            <option value="Vietnamese">Vietnamese</option>
          </select>
        </div>
        <div className="input-group">
          <span className="input-group-text">Diet: </span>
          <select
            className="form-control"
            name="diet"
            id="diet"
            onChange={(e) => setDiet(e.target.value)}
          >
            <option value="">Select Diet</option>
            <option value="Gluten Free">Gluten Free</option>
            <option value="Ketogenic">Ketogenic</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
            <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Pescetarian">Pescetarian</option>
            <option value="Paleo">Paleo</option>
            <option value="Primal">Primal</option>
            <option value="Low FODMAP">Low FODMAP</option>
            <option value="Whole30">Whole30</option>
          </select>
        </div>
        <div className="input-group">
          <span className="input-group-text">Intolerances: </span>
          <select
            className="form-control"
            name="intolerances"
            id="intolerances"
            onChange={(e) => setIntolerances(e.target.value)}
          >
            <option value="">Select Intolerance</option>
            <option value="Dairy">Dairy</option>
            <option value="Egg">Egg</option>
            <option value="Gluten">Gluten</option>
            <option value="Grain">Grain</option>
            <option value="Peanut">Peanut</option>
            <option value="Seafood">Seafood</option>
            <option value="Sesame">Sesame</option>
            <option value="Shellfish">Shellfish</option>
            <option value="Soy">Soy</option>
            <option value="Tree Nut">Tree Nut</option>
            <option value="Wheat">Wheat</option>
          </select>
        </div>
        <div className="input-group">
          <span className="input-group-text">type: </span>
          <select
            className="form-control"
            name="type"
            id="type"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="main course">main course</option>
            <option value="side dish">side dish</option>
            <option value="dessert">dessert</option>
            <option value="appetizer">appetizer</option>
            <option value="salad">salad</option>
            <option value="bread">bread</option>
            <option value="breakfast">breakfast</option>
            <option value="soup">soup</option>
            <option value="beverage">beverage</option>
            <option value="sauce">sauce</option>
            <option value="marinade">marinade</option>
            <option value="fingerfood">fingerfood</option>
            <option value="snack">snack</option>
            <option value="drink">drink</option>
          </select>
        </div>
        <div className="input-group">
          <span className="input-group-text">Sort: </span>
          <select
            className="form-control"
            name="sort"
            id="tysortpe"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="meta-score">meta-score</option>
            <option value="popularity">popularity</option>
            <option value="healthiness">healthiness</option>
            <option value="price">price</option>
            <option value="time">time</option>
            <option value="random">random</option>
            <option value="max-used-ingredients">max-used-ingredients</option>
            <option value="min-missing-ingredients">
              min-missing-ingredients
            </option>
            <option value="alcohol">alcohol</option>
            <option value="caffeine">caffeine</option>
            <option value="copper">copper</option>
            <option value="energy">energy</option>
            <option value="calories">calories</option>
            <option value="calcium">calcium</option>
            <option value="carbohydrates">carbohydrates</option>
            <option value="carbs">carbs</option>
            <option value="choline">choline</option>
            <option value="cholesterol">cholesterol</option>
            <option value="total-fat">total-fat</option>
            <option value="fluoride">fluoride</option>
            <option value="trans-fat">trans-fat</option>
            <option value="saturated-fat">saturated-fat</option>
            <option value="mono-unsaturated-fat">mono-unsaturated-fat</option>
            <option value="poly-unsaturated-fat">poly-unsaturated-fat</option>
            <option value="fiber">fiber</option>
            <option value="folate">folate</option>
            <option value="folic-acid">folic-acid</option>
            <option value="iodine">iodine</option>
            <option value="iron">iron</option>
            <option value="magnesium">magnesium</option>
            <option value="manganese">manganese</option>
            <option value="vitamin-b3">vitamin-b3</option>
            <option value="niacin">niacin</option>
            <option value="vitamin-b5">vitamin-b5</option>
            <option value="pantothenic-acid">pantothenic-acid</option>
            <option value="phosphorus">phosphorus</option>
            <option value="potassium">potassium</option>
            <option value="protein">protein</option>
            <option value="vitamin-b2">vitamin-b2</option>
            <option value="riboflavin">riboflavin</option>
            <option value="selenium">selenium</option>
            <option value="sodium">sodium</option>
            <option value="vitamin-b1">vitamin-b1</option>
            <option value="thiamin">thiamin</option>
            <option value="vitamin-a">vitamin-a</option>
            <option value="vitamin-b6">vitamin-b6</option>
            <option value="vitamin-b12">vitamin-b12</option>
            <option value="vitamin-c">vitamin-c</option>
            <option value="vitamin-d">vitamin-d</option>
            <option value="vitamin-e">vitamin-e</option>
            <option value="vitamin-k">vitamin-k</option>
            <option value="sugar">sugar</option>
            <option value="zinc">zinc</option>
          </select>
        </div>
        <div className="input-group">
          <span className="input-group-text">Min Carbs: </span>
          <input
            className="form-control"
            type="text"
            value={minCarbs}
            onChange={(e) => setMinCarbs(e.target.value)}
            placeholder="Min Carbs"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Max Carbs: </span>
          <input
            className="form-control"
            type="text"
            value={maxCarbs}
            onChange={(e) => setMaxCarbs(e.target.value)}
            placeholder="Max Carbs"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Min Protein: </span>
          <input
            className="form-control"
            type="text"
            value={minProtein}
            onChange={(e) => setMinProtein(e.target.value)}
            placeholder="Min Protein"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Max Protein: </span>
          <input
            className="form-control"
            type="text"
            value={maxProtein}
            onChange={(e) => setMaxProtein(e.target.value)}
            placeholder="Max Protein"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Min Calories: </span>
          <input
            className="form-control"
            type="text"
            value={minCalories}
            onChange={(e) => setMinCalories(e.target.value)}
            placeholder="Min Calories"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Max Calories: </span>
          <input
            className="form-control"
            type="text"
            value={maxCalories}
            onChange={(e) => setMaxCalories(e.target.value)}
            placeholder="Max Calories"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Min Fat: </span>
          <input
            className="form-control"
            type="text"
            value={minFat}
            onChange={(e) => setMinFat(e.target.value)}
            placeholder="Min Fat"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">Max Fat: </span>
          <input
            className="form-control"
            type="text"
            value={maxFat}
            onChange={(e) => setMaxFat(e.target.value)}
            placeholder="Max Fat"
          />
        </div>
        <div className="input-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={fillIngredients}
              onChange={(e) => setFillIngredients(e.target.checked)}
            />
            <label className="form-check-label">Fill Ingredients:</label>
          </div>
        </div>
        <br />
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </form>
      <hr />
      <br />
      <section className="bg-light">
        {results.map((resultsObj: any, index) => {
          const hasNutrition = resultsObj.nutrition != null;
          const hasIngredients = resultsObj.missedIngredientCount > 0;
          {
            hasIngredients;
          }
          return (
            <>
              <div className="p-2 bg-dark border">
                <p key={`${resultsObj.id}`} className="h4 text-white">
                  {resultsObj.title}
                </p>
                <img src={resultsObj.image} />

                {hasNutrition &&
                  resultsObj.nutrition.nutrients.map((nutrientsObj: any) => {
                    return (
                      <>
                        <p className="text-white">
                          {nutrientsObj.name}: {nutrientsObj.amount}{" "}
                          {nutrientsObj.unit}
                        </p>
                      </>
                    );
                  })}

                <ul className="list-group">
                  {hasIngredients &&
                    resultsObj.missedIngredients.map((ingredientsObj: any) => {
                      return (
                        <li className="list-group-item">
                          <span>{ingredientsObj.original}</span>
                          <span className=".p-3">
                            <img src={ingredientsObj.image} />
                          </span>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <br />
            </>
          );
        })}
      </section>
    </div>
  );
};

export default App;
