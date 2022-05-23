import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'


// To use state, App should be a class not function
// State tells the child nodes what to do (react is downstream only)
class App extends Component {
    constructor() {
        super();
        this.state = {
            // robots: usually starts empty and calls the info
            // from an api in a real-case scenario
            robots: [], //robots, (instead of [])
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        // Replaced if else
        return !robots.length ?
        <h1 className='tc f1 pa5 grow'>Loading</h1> :
        (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;

// Replacing if else with a cleaner JS syntax
// if (!robots.length) {
//     return <h1 className='tc pa5 '>Loading</h1>
// } else{
//     return (
        // <div className='tc'>
        //     <h1>RoboFriends</h1>
        //     <SearchBox searchChange={this.onSearchChange} />
        //     <Scroll>
        //         <CardList robots={filteredRobots} />
        //     </Scroll>
//         </div>
//         );
// }



// const App = () => {
//     return (
//         <div className='tc'>
//             <h1 className='fc'>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots}/>
//         </div>
//     );
// }