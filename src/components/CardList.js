import React from "react";
import Card from "./Card";

// Since its javascript it you can functionize it directly
const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error('Dame Da Ne Dame Yo Dame Na No Yo');
    // } // To trigger Error Boundary
    
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