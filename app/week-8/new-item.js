"use client";
import {useState} from "react";
export default function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: generateRandomString(16),
            name: name,
            quantity: quantity,
            category: category,
        }

        onAddItem(newItem);

        setName("");
        setQuantity(1);
        setCategory("produce")
    };

    //credit: https://www.slingacademy.com/article/ways-to-generate-random-strings-in-javascript/ for generate random string code
    const generateRandomString = (length) => {
        let result = '';
        const characters =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }


    return(
        <main className="flex flex-col justify-center items-center flex-wrap h-screen">
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div>
                    <input className="text-center mb-4" type="text" value={name} onChange={handleNameChange} placeholder="Product Name"></input>
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <h1 className="text-center">Quantity: {quantity}</h1>
                <div>
                    <button className="bg-blue-200 m-2" type="button" onClick={increment}>Increase</button>
                    <button className="bg-green-200 m-2" type="button" onClick={decrement}>Decrease</button>
                </div>
                <div>
                    <button type="submit" name="submitButton">Submit</button>
                </div>
            </form>
        </main>
    );
}