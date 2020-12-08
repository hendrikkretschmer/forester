import React from 'react';
import './Treasures.css';
import TreasureNav from './TreasureNav';

function Treasures() {

 return (
        <div>
            <TreasureNav />
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