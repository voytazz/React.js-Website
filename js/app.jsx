import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    
    class MainContent extends React.Component {
        render() {
            return <div className="mainBackground"><div className="headerFlex"><HeaderMenu /><HeaderBackground /></div><PictureBoxes /><div className="headerFlex"><YourPassionMenu /><YourPassion /></div><MainText /><ProductionBoxes /><SecondPictureBoxes /></div>
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
    
    class MainText extends  React.Component {
        render() {
            return (<div className="mainFlex">
            <div className="mainMenu">
           
            <div className="mainMenuText"> <span>24th 
                January 2016</span>
            </div>
        
            
            
            </div>
                           <div className="mainTextFirst"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt odit sunt odio inventore ex tempore tempora ipsa tenetur aspernatur, saepe officiis harum ducimus sint nemo quaerat illo a facilis nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ratione reprehenderit minima sint. Mollitia aliquam asperiores delectus, perferendis beatae iusto voluptate quam deleniti. Corporis quisquam fugiat a dolores distinctio placeat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo et molestias quisquam nihil, voluptatum tempora labore? Cumque maiores iste distinctio? Ratione nemo ducimus quos maiores dolores cupiditate ipsam, iusto consectetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt qui quo saepe alias delectus ratione? Consectetur, impedit, quasi dolore illo fuga sapiente officiis maxime quis unde quo aliquam tempore autem.</p>
            <br /><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nam praesentium nisi vel iusto eveniet placeat veniam suscipit molestiae eaque rerum eos expedita minus labore, asperiores. Voluptatibus perferendis, corrupti cum.</p></div>
              <div className="mainTextSecond">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt odit sunt odio inventore ex tempore tempora ipsa tenetur aspernatur, saepe officiis harum ducimus sint nemo quaerat illo a facilis nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ratione reprehenderit minima sint. Mollitia aliquam asperiores delectus, perferendis beatae iusto voluptate quam deleniti. Corporis quisquam fugiat a dolores distinctio placeat!
            
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nam praesentium nisi vel iusto eveniet placeat veniam suscipit molestiae eaque rerum eos expedita minus labore, asperiores. Voluptatibus perferendis, corrupti cum.</div>
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
    
    class ProductionBoxes extends React.Component {
        render() {
            return (<div className="production">
                <div className="productionMenu"></div>
            </div>)
        }
    }
    
    class SecondPictureBoxes extends React.Component {
        render() {
            return (<div className="secondPictureBoxes">
                <div className="secondPictureMenu">January 2016</div>
                
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