import React, { ChangeEvent, useState } from "react";
import { Button } from "react-bootstrap";
import InputField from "./components/InputField";
import DropdownMenu from "./components/DropDownMenu";
import { RecipesOption } from "./types";
import useFetchRecipes from "./hooks/fetch-recipes";
import DATA from "./data";
import RecipesSection from "./components/RecipesSection";
import HeaderSection from "./components/HeaderSection";

const App = () => {
  const [recipesOption, setRecipesOption] = useState<RecipesOption>({});
  const { getResults, results } = useFetchRecipes(recipesOption);

  const updateRecipe = (
    key: keyof RecipesOption,
    val: string | number | boolean
  ) => {
    setRecipesOption({ ...recipesOption, [key]: val });
  };

  return (
    <div>
      <HeaderSection image="nutrition_header.png" />

      <form
        className="d-grid gap-3 my-2 align-content-start"
        onSubmit={(e) => {
          e.preventDefault();
          getResults();
        }}
      >
        <InputField
          className="form-control"
          type="text"
          onChange={(e) => updateRecipe("query", e.target.value)}
          title="Query:"
          placeholder="Query"
        />

        <DropdownMenu
          title="Cuisine: "
          id="cuisine"
          onChange={(e) => updateRecipe("cuisine", e.target.value)}
          className="form-control"
          options={DATA.countries}
        />

        <DropdownMenu
          title="excludeCuisine: "
          id="excludeCuisine"
          onChange={(e) => updateRecipe("excludeCuisine", e.target.value)}
          className="form-control"
          options={DATA.countries}
        />

        <DropdownMenu
          title="Diet: "
          id="diet"
          onChange={(e) => updateRecipe("diet", e.target.value)}
          className="form-control"
          options={DATA.diet}
        />

        <DropdownMenu
          title="Intolerances: "
          id="intolerances"
          onChange={(e) => updateRecipe("intolerances", e.target.value)}
          className="form-control"
          options={DATA.intolerances}
        />

        <DropdownMenu
          title="Type: "
          id="type"
          onChange={(e) => updateRecipe("type", e.target.value)}
          className="form-control"
          options={DATA.type}
        />

        <DropdownMenu
          title="Sort: "
          id="sort"
          onChange={(e) => updateRecipe("sort", e.target.value)}
          className="form-control"
          options={DATA.sortTypes}
        />

        <InputField
          className="form-control"
          type="text"
          id="minCarbs"
          onChange={(e) => updateRecipe("minCarbs", e.target.value)}
          title="Min Carbs: "
          placeholder="Min Carbs"
        />

        <InputField
          className="form-control"
          type="text"
          id="maxCarbs"
          onChange={(e) => updateRecipe("maxCarbs", e.target.value)}
          title="Max Carbs: "
          placeholder="Max Carbs"
        />

        <InputField
          className="form-control"
          type="text"
          id="minProtein"
          onChange={(e) => updateRecipe("minProtein", e.target.value)}
          title="Min Protein: "
          placeholder="Min Protein"
        />

        <InputField
          className="form-control"
          type="text"
          id="maxProtein"
          onChange={(e) => updateRecipe("maxProtein", e.target.value)}
          title="Max Protein: "
          placeholder="Max Protein"
        />

        <InputField
          className="form-control"
          type="text"
          id="minCalories"
          onChange={(e) => updateRecipe("minCalories", e.target.value)}
          title="Min Calories: "
          placeholder="Min Calories"
        />

        <InputField
          className="form-control"
          type="text"
          id="maxCalories"
          onChange={(e) => updateRecipe("maxCalories", e.target.value)}
          title="Max Calories: "
          placeholder="Max Calories"
        />

        <InputField
          className="form-control"
          type="text"
          id="minFat"
          onChange={(e) => updateRecipe("minFat", e.target.value)}
          title="Min Fat: "
          placeholder="Min Fat"
        />

        <InputField
          className="form-control"
          type="text"
          id="maxFat"
          onChange={(e) => updateRecipe("maxFat", e.target.value)}
          title="Max Fat: "
          placeholder="Max Fat"
        />

        <InputField
          className="form-check-input"
          type="checkbox"
          onChange={(e) => updateRecipe("fillIngredients", e.target.checked)}
          title="Fill Ingredients:"
        />
        <div>
          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
        </div>
      </form>
      <RecipesSection results={results} />
    </div>
  );
};

export default App;
