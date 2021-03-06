import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hats from './Components/Hats';
import Avatar from './Components/Avatar';
import Canvas from './Components/Canvas';
import { isGif, parseGif } from './gifToCanvasList'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: "./macdja38.jpg",
      hatImage: "./santa_hat.png",
    };
    this.onHatChange = this.onHatChange.bind(this);
    this.onNewBackground = this.onNewBackground.bind(this);
  }

  onNewBackground(background) {
    let isAGif = isGif(background);
    let frames = [];
    if (isAGif) {
      frames = parseGif(background);
    }
    this.setState({ isAGif, backgroundImage: background, frames })
  }

  onHatChange(hat) {
    this.setState({ hatImage: hat });
  }

  render() {

    return (
      <div className="wrapper">

        <div className="one">
          <div className="image-header"><p> Image</p>

          </div>
          <div className="display-image">
            <Canvas backgroundImage={this.state.backgroundImage} hatImage={this.state.hatImage} />
          </div>
        </div>
        <div className="five">
          <Hats onHatChange={this.onHatChange} /></div>
        <div className ="three">
          <Avatar onNewBackground={this.onNewBackground} />
        </div>
      </div>);
  }
}

export default App;
