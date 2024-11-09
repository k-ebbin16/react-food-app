import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import Search from "./components/Search";
import "./App.css";
import { useState } from "react";

function App() {
    const [foodData, setFoodData] = useState([]);

    return (
        <div>
            <Nav />
            <Search foodData={foodData} setFoodData={setFoodData} />
            <FoodList foodData={foodData} />
        </div>
    );
}

export default App;
