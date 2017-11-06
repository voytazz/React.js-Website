import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    
    class MainContent extends React.Component {
        render() {
            return <div className="mainBackground"><div className="headerFlex"><HeaderMenu /><HeaderBackground /></div><PictureBoxes /></div>
        }
    }

    class HeaderMenu extends React.Component {
        render() {
            return (<div className="headerMenu">
            <div className="hamburgerMenu"><div className="hamburger"></div>
                <div className="hamburger"></div><div className="hamburger"></div></div>
            <div className="headerMenuText"><div className="headerArrow"></div><span>PAINT THE POWER</span></div>
            
            </div>
                )
        }
    }
    
    class HeaderBackground extends React.Component {
        render() {
            return (<div className="headerBackground"><div className="envelope"><img src="./images/envelope.png" /></div><div className="paintPixtureFlex"><img src="./images/paintPixture.png" /></div>
            <div className="headerBackgroundFlex"><div className="headerBackgroundText"><h2>Humble Beginings</h2><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, similique illum excepturi perferendis commodi explicabo corporis placeat.</span></div><div className="headerBackgroundDate"><p>April 19th 2016</p></div></div>
            </div>)
        }
    }
    
    class PictureBoxes extends React.Component {
        render() {
            return (<div className="pictureSection"><h2>Pictures worth seeing</h2>
            <div className="photoBox"><div className="boxPhoto"><img src="./images/first-box.png" /></div><h2 className="photoBoxText">Pressure</h2></div></div>)
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