// item-list.js
"use client";
import {useState} from "react";
import Item from "./item";
import SortBttns from "./sortBttn";

const ItemList = ({items, onItemSelect}) => {
  const [sortBy, setSortBy] = useState("name");

  const sortItems = [...items].sort((a, b) => {
    if (sortBy == "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy == "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
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
              onSelect={() => onItemSelect(item)}
            />
          ))}
        </ul>
    </div>
  );
};

export default ItemList;
