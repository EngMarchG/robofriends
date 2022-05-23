import React from 'react'; 

const Card = ({ name, email, id}) => { // Put the oject attributes as parameters as another way
    // const {name, email, id} = props // This is one way of calling the object like ES6
    // If the 2 methods above weren't defined instead props.name, props.email etc
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2> 
                <p>{email}</p>  
            </div>
        </div>
    );
}

export default Card;