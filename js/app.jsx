import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    
    class MainContent extends React.Component {
        render() {
            return <div className="mainBackground"><div className="headerFlex"><HeaderMenu /><HeaderBackground /></div></div>
        }
    }

    class HeaderMenu extends React.Component {
        render() {
            return (<div className="headerMenu">
            <div className="hamburgerMenu"><div className="hamburger"></div>
                <div className="hamburger"></div><div className="hamburger"></div></div>
            <div className="headerMenuText"><div className="headerArrow"></div><span>PAINT THE POWE</span></div>
            
            </div>
                )
        }
    }
    
    class HeaderBackground extends React.Component {
        render() {
            return (<div className="headerBackground"><img src="../images/paintPixture.png" /></div>)
        }
    }
    
    class App extends React.Component {
        render() {
            return (<MainContent />)
        }
    }
    
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});