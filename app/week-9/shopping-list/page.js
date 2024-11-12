"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import itemList from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdea from "./meal-ideas";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState(itemList);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // Redirect if not logged in
    }
  }, [user, router]);

  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const alterName = item.name.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
    setSelectedItem(alterName);
  };

  if (!user) return null; // Render nothing until user is verified

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Shopping List</h1>
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <NewItem onAddItem={handleAddItem} />
      <MealIdea ingredient={selectedItem} />
    </main>
  );
}
