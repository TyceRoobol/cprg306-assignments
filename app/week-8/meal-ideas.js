"use client";
import {useState, useEffect} from "react";

export default function MealIdea({ingredient}) {
    const [meals, setMeals] = useState([])

    const fetchMealIdeas = async(ingredient) => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`

        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error('No response to meal idea request')
            }
            const mealIdeas = await response.json();
            return mealIdeas.meals; 
        } catch (error) {
            console.log(error);
            return[]
        }
    }

    const loadMealIdeas = async() => {
        const meals = await fetchMealIdeas(ingredient)
        setMeals(meals);
    }
    
    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    } , [ingredient]
    ) 

    return (
        <div className="text-center mt-6">
            <h1 className="text-2xl font-bold">Meals for "{ingredient}"</h1>
            {meals && meals.length > 0 ? (
                <ul className="flex flex-wrap justify-center gap-6">
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} className="w-full h-auto rounded mt-2" alt={meal.strMeal} style={{ width: '100px' }} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No meals found for "{ingredient}".</p>
            )}
        </div>
    );
}