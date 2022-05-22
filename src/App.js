import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'


// To use state, App should be a class not function
// State tells the child nodes what to do (react is downstream only)
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    render() {
    return (
        <div className='tc'>
            <h1 className='fc'>RoboFriends</h1>
            <SearchBox />
            <CardList robots={this.state.robots}/>
        </div>
    );
    }
}

export default App;

// const App = () => {
//     return (
//         <div className='tc'>
//             <h1 className='fc'>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots}/>
//         </div>
//     );
// }