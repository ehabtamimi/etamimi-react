const RecipesSection = ({ results }: any) => {
  return (
    <section className="bg-light pt-4 border-top">
      {results.map((resultsObj: any, key: number) => {
        const hasNutrition = resultsObj.nutrition != null;
        const hasIngredients = resultsObj.missedIngredientCount > 0;
        {
          hasIngredients;
        }
        return (
          <div key={key}>
            <div className="p-2 bg-dark border">
              <p key={`${resultsObj.id}`} className="h4 text-white">
                {resultsObj.title}
              </p>
              <img src={resultsObj.image} />

              {hasNutrition &&
                resultsObj.nutrition.nutrients.map(
                  (nutrientsObj: any, key: number) => {
                    return (
                      <p className="text-white" key={key}>
                        {nutrientsObj.name}: {nutrientsObj.amount}{" "}
                        {nutrientsObj.unit}
                      </p>
                    );
                  }
                )}

              <ul className="list-group">
                {hasIngredients &&
                  resultsObj.missedIngredients.map(
                    (ingredientsObj: any, key: number) => {
                      return (
                        <li className="list-group-item" key={key}>
                          <span>{ingredientsObj.original}</span>
                          <span className=".p-3">
                            <img src={ingredientsObj.image} />
                          </span>
                        </li>
                      );
                    }
                  )}
              </ul>
            </div>
            <br />
          </div>
        );
      })}
    </section>
  );
};
export default RecipesSection;
