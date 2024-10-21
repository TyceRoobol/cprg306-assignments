// item-list.js
"use client";
import {useState} from "react";
import Item from "./item";
import items from "./items.json";
import SortBttns from "./sortBttn";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = items.sort((a, b) => {
    if (sortBy == "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy == "category") {
      return a.category.localeCompare(b.category);
    }
  })

  return (
    <div>
      <SortBttns sortBy={sortBy} setSortBy={setSortBy}></SortBttns>
        <ul>
          {sortItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
    </div>
  );
};

export default ItemList;
