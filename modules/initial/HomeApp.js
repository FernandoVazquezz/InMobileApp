import React from 'react';
import Main from './Main';
import Splash from './Splash';

export default class HomeApp extends React.Component {
    
        constructor(props) {
        super(props);
        this.state = {currentScreen: 'Splash'}
        setTimeout(() => {
            this.setState({currentScreen: 'Main'})
        },1000)
    }
    render() {
        const{currentScreen} = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Main/>
        return mainScreen
    }
}