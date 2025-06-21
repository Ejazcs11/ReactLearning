import { MouseEvent } from "react";
function ListGroup() {

    let items = [
        'Peshawar',
        'Islamabad',
        'Lahore',
        'Faisal Abad'

    ];

    const handleClick = (event: MouseEvent) => console.log(event)

    

    return (
        <>
        <h3>List Iitems</h3>

        { items.length === 0 && <p>Not items found</p>}

        
          <ul className="list-group">
                {items.map((items)=> ( 
                <li className="list-group-item"
                key={items}
                onClick={handleClick}
                  >
                    {items}
                    </li>
                ))}
          </ul>
      </>
    ); 
    }

export default ListGroup;