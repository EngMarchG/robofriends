import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'


// To use state, App should be a class not function
// State tells the child nodes what to do (react is downstream only)
function App() {
    const [ robots, setRobots ] = useState([])
    const [ searchfield, setSearchfield ] = useState('')
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        fetch('https//jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)});
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
        }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
            
            // Replaced if else
    return !robots.length ?
    <h1 className='tc f1 pa5 grow'>Loading</h1> :
    (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click me</button>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;