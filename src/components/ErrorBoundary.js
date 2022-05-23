import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        const hasError = this.state.hasError;
        
        return hasError ?
            <h1>Ooops, Something wrong has occured</h1> :
            this.props.children;
    
    // Alternative way of triggering the Error
    //     if (hasError) {
    //         return <h1>Ooops, Something wrong has occured</h1>
    //     } else {
    //         return this.props.children;
    //     }
    
    }
}

export default ErrorBoundary;