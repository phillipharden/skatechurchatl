import React, { Component } from "react";
import Instagram from "../../assets/instagram.png";

export class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer>
       <div>
       <img
          src={Instagram}
          alt="Instagram"
          style={{ width: "50px", height: "auto" }}
        />
       </div>
       <div>
       <p>&copy; {year} UNRTHDX MVMNT</p>
       </div>
        
      </footer>
    );
  }
}

export default Footer;
