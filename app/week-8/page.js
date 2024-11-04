// page.js
"use client"
import {useState} from "react";
import itemList from "./items.json";
import ItemList from "./item-list";
import Item from "./item";
import NewItem from "./new-item";
import MealIdea from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemList)

  const handleAddItem = (newItem) => {
    setItems((items) => [...items , newItem])
  };
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemSelect = (item) => {
    const alterName = item.name.split(',')[0].replace(/[^a-zA-Z ]/g, '').trim();
    setSelectedItem(alterName);
  }

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Shopping List</h1>
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <NewItem onAddItem={handleAddItem} />
      <MealIdea ingredient={selectedItem}/>
    </main>
  );
};

