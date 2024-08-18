import React, { Component } from "react";
import Logo from "../../assets/sk8churchatlWHT.png";

export class Hero extends Component {
  render() {
    return (
      <div className="hero-section-bg">
        <div className="hero-section ">
          <div className="container">
          
            <div className='mb-1 hero-header'>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "80%", height: "auto" }}
            />
            </div>
            <div className='hero-content'>
                <p className='mb-1'>Skate Church is an evangelistic Bible study at a local skate park. We bring boxes of pizza and share the good news with skaters.</p>
                <p>Recently, we started Skate Church at Brook Run Skatepark, with the goal of increasing the frequency of the Bible study from once a month to every week. Subsequently, we aim to expand to other skate parks such as JB Williams and 4th Ward Skate Parks, with the ultimate goal of having a presence in eight different skate parks in Atlanta.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
