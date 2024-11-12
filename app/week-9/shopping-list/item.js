// item.js

const Item = ({ name, quantity, category, onSelect }) => {
    return (
      <li onClick={() => onSelect({ name })} className="flex justify-between border-b border-red-300">
        <span className="font-bold">{name}</span>
        <span className="text-blue-600">x{quantity}</span>
        <span className="text-black-500">{category}</span>
      </li>
    );
  };
  
  export default Item;
  