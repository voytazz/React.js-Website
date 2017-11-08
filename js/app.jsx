import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    
    class MainContent extends React.Component {
        render() {
            return <div className="mainBackground"><div className="headerFlex"><HeaderMenu /><HeaderBackground /></div><PictureBoxes /><div className="headerFlex"><YourPassionMenu /><YourPassion /></div></div>
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
            <div className="photoBoxFlex">
            <div className="leftArrow"><div className="leftSliderArrow"></div></div>
            <div className="photoBox"><div className="boxPhoto"><img src="./images/first-box.png" /></div><div className="photoBoxText"><h2>Pressure</h2><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta aspernatur voluptatibus hic reprehenderit eligendi sed asperiores.</span></div>
            <div className="photoBoxFooter"><div className="photoBoxComments">374 comments</div></div>
            </div>
            <div className="photoBox"><div className="boxPhoto"><img src="./images/second-box.png" /></div><div className="photoBoxText"><h2>Decayed</h2><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta aspernatur voluptatibus hic reprehenderit eligendi sed asperiores.</span></div>
            </div>
            <div className="photoBox"><div className="boxPhoto"><img src="./images/third-box.png" /></div><div className="photoBoxText"><h2>Bliss Texture</h2><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta aspernatur voluptatibus hic reprehenderit eligendi sed asperiores.</span></div>
            </div>
            <div className="rightArrow"><div className="rightSliderArrow"></div></div> 
            </div>
            </div>)
        }
    }
    
    
      class YourPassionMenu extends React.Component {
        render() {
            return (<div className="headerMenu">
           
            <div className="passionMenuText"><div className="headerArrow"></div><span>PAINT THE POWER</span></div>
            
            </div>
                )
        }
    }
    
    
    
    class YourPassion extends React.Component {
        render() {
            return (<div className="passionBackground"><div className="passionPixtureFlex"><img src="./images/its-your-passion.png" /></div>
        
            </div>)
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