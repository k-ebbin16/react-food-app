import FoodList from "./components/FoodList";
import Search from "./components/Search";
import { useState } from "react";

function App() {
    const [foodData, setFoodData] = useState([]);

    return (
        <div>
            <Search foodData={foodData} setFoodData={setFoodData} />
            <FoodList foodData={foodData} />
        </div>
    );
}

export default App;
