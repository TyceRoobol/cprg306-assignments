// page.js
"use client"
import {useState} from "react";
import itemList from "./items.json";
import ItemList from "./item-list";
import Item from "./item";
import NewItem from "./new-item";

export default function Page() {
  const [items, setItems] = useState(itemList)

  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem])
  };

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Shopping List</h1>
      <ItemList items={items} />
      <NewItem onAddItem={handleAddItem} />
    </main>
  );
};

