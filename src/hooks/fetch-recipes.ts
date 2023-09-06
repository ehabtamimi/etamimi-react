import { useCallback, useState } from "react"
import { RecipesOption } from "../types";
const apiKey = "43cce9df2ced467e8d49f23b16f0adfe";

export default (recipesOption: RecipesOption) => {

    const [results, setResults] = useState([]);
    const getResults = useCallback(async() => {
        let params = new URLSearchParams({...recipesOption, apiKey});
        removeEmptyParams(params);
        const response = await fetch(
              "https://api.spoonacular.com/recipes/complexSearch?" + params.toString(),
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
    
    }, [recipesOption])
    return {
        results, getResults
    }
}

const removeEmptyParams =(params:URLSearchParams)=>{
    const keysForDel = [""];
    params.forEach((value, key) => {
      if (value == "" || value=="undefined") {
        keysForDel.push(key);
      }
    });

    keysForDel.forEach((key) => {
      params.delete(key);
    });
}