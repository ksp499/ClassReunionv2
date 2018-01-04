
import React, { Component } from 'react';
import Corine from "./images/Corine.jpg"
import Jamye from "./images/Jamye.jpg";
import Jan from "./images/Jan.jpg";
import Kari from "./images/Kari.jpg";
import Vick from "./images/Vick.jpg";
import Cindy from "./images/Cindy.jpg"
import David from "./images/David.jpg"
import Delia from "./images/Delia.jpg"
import Tim from "./images/TimE.jpg"
import DLynn from "./images/DLynn.jpg"
import Dan from "./images/Dan.jpg"
import Linda from "./images/Linda.jpg"
import Maria from "./images/Maria.jpg"
import Steve from "./images/Steve.jpg"
import Keith from "./images/Keith.jpg"
import Penny from "./images/Penny.jpg"
import Russ from "./images/Russ.jpg"
import Keevin from "./images/Keevin.jpg"
import Kathy from "./images/Kathy.jpg"
import Sonia from "./images/Sonia.jpg"
import Carlos from "./images/Carlos.jpg"
import Rusty from "./images/Rusty.jpg"
import Sandra from "./images/Sandra.jpg"
import Terry from "./images/Terry.jpg"
import TimN from "./images/TimN.jpg"
import Dwayne from "./images/Dwayne.jpg"
import Clay from "./images/Clay.jpg"
import Sally from "./images/Sally.jpg"
import DwayneS from "./images/DwayneS.jpg"
import Shawn from "./images/Shawn.jpg"
import Daren from "./images/Daren.jpg"
import Larry from "./images/Larry.jpg"
import Rhonda from "./images/Rhonda.jpg"
import Tracie from "./images/Tracie.jpg"
import Peggy from "./images/Peggy.jpg"
import Guy from "./images/Guy.jpg"
import Richard from "./images/Richard.jpg"




 const images = [Corine, Jamye, Jan, Kari, Vick, Cindy, David, Delia, Tim, DLynn, Dan, Linda, Maria, Steve, Keith, Penny, Russ, Keevin, Kathy, Sonia, Carlos, Rusty, Sandra, Terry, TimN, Dwayne, Clay, Sally, DwayneS, Shawn, Daren, Larry, Rhonda, Tracie, Peggy, Guy, Richard]
 const Caption = [ "Corine Ancria",]
const listItems = images.map((image) =>
  <img className="rounded-circle img-fluid d-block mx-auto photo" src= {image} alt="Coming soon" />

);

  

class Photo extends Component {
  render() {
    return (

  

<div>

<ul>{listItems}</ul>
<div className = "PhotoBox">

</div>

</div>
        );
    }
  }

export default Photo;