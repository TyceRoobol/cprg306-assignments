"use client";
import {useState} from "react";
export default function Item() {
    const [quantity, setQuantity] = useState(1);

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

    return(
        <main class="flex flex-col justify-center items-center flex-wrap h-screen">
            <h1 class="text-center">Quantity: {quantity}</h1>
            <div>
                <button class="bg-blue-200 m-2" onClick={increment}>Increase</button>
                <button class="bg-green-200 m-2" onClick={decrement}>Decrease</button>
            </div>
        </main>
    );
}