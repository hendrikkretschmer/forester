import React, {useState, useEffect} from 'react';
import './Treasures.css';


function Treasures() {

 return (
        <div>
            <p>GET READY TO EXPLORE SOME TREASURES!</p>
        </div>
    )
}

export default Treasures;




/*   useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch ('https://rickandmortyapi.com/api/character/643');
        const items = await data.json();
        console.log(items.items)
        setItems(items.items)
    }

    return (
        <div>
            {items.map(item => (
            <p>{item.name}</p>
            ))}
        </div>
    )
}

*/