"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdea from "./meal-ideas";
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  // Fetch items when the component is mounted or user changes
  useEffect(() => {
    const loadItems = async () => {
      if (user && user.uid) {
        try {
          const fetchedItems = await getItems(user.uid);
          setItems(fetchedItems);
        } catch (error) {
          console.error("Failed to fetch items:", error);
        }
      }
    };

    if (!user) {
      router.push("/week-9"); // Redirect if not logged in
    } else {
      loadItems();
    }
  }, [user, router]);

  // Handle adding a new item
  const handleAddItem = async (newItem) => {
    if (user && user.uid) {
      try {
        const newItemId = await addItem(user.uid, newItem);
        setItems((prevItems) => [...prevItems, { id: newItemId, ...newItem }]);
      } catch (error) {
        console.error("Failed to add item:", error);
      }
    }
  };

  // Handle item selection
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