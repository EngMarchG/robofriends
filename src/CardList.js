import React from "react";
import Card from "./Card";

// Since its javascript it you can functionize it directly
const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}/>
                    )
                })
            }
        </div>
    );
}

export default CardList;


// // One way of doing it
// const CardList = ({ robots }) => {
//     const cardArray = robots.map((user, i) => {
//         return <Card 
//                     key={i} 
//                     id={robots[i].id} 
//                     name={robots[i].name} 
//                     email={robots[i].email}/>
//     })
//     return (
//         <div>  
//             {cardArray}
//         </div>
//     );
// }
// export default CardList;