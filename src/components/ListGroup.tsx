import { useState } from "react";

function ListGroup() {
  let items = ["Peshawar", "Islamabad", "Lahore", "Faisal Abad"];


  const [selectedIndex, setSelectedIndex] = useState(-1);


  return (
    <>
      <h3>List Iitems</h3>

      {items.length === 0 && <p>Not items found</p>}

      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {setSelectedIndex(index);}}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
