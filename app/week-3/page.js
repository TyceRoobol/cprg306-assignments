// page.js

import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Shopping List</h1>
      <ItemList />
    </main>
  );
};

