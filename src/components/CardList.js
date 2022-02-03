import react from 'react';
import Card from './Card';

const CardList = ({robots}) => {
 
    const cardComponent = robots.map((user, id) => {
        return (
            <Card 
                key={id} 
                id={robots[id].id} 
                name={robots[id].name} 
                email={robots[id].email}
            />
        );
    })
    return (
        <div>
           {cardComponent}
        </div>
    );
 }

 export default CardList;