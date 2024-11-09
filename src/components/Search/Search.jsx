import { useEffect, useState } from "react";
import { config } from "../../../config";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = config.MY_KEY;

function Search({ foodData, setFoodData }) {
    const [query, setQuery] = useState("pizza");

    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();

            console.log(data.results);
            setFoodData(data.results);
        }

        fetchFood();
    }, [query]);

    return (
        <div>
            <input value={query} onChange={e => setQuery(e.target.value)} type="text" />
        </div>
    );
}

export default Search;
