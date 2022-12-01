import React from "react";
import Oppo from "./Images/Oppo.jpg";
import Redmi from "./Images/Redmi.jpg";
import Redmi1 from "./Images/RemiNote10.jpg";
import one from "./Images/one.jpg";
import two from "./Images/two.jpg";
import three from "./Images/three.jpg";
import four from "./Images/four.jpg";
import five from "./Images/five.jpg";
import six from "./Images/six.jpg";

import "./Mobile.css";
import Headr from "./Headr";
//Mobile data fetched here
function Mobile() {
  return (
    <div>
      <h1 className="mobilelanches">Mobile Launches</h1>
      <Headr />
      <div className="mobilescontainer">
        <div className="mobile">
          <img src={four} />
          <h5>OPPO F21 Pro</h5>
          <p>Flaunt Your Best Flagship IMX709 Selfie Sensor</p>
          <p>
            $ <span>22999</span>
          </p>
          <button>Buy Now</button>
        </div>
        <div className="mobile">
          <img src={five} />
          <h5>Mi 11X 5Gx</h5>
          <p>
            120Hz E4 AMOLED Display Qualcomm® Snapdragon™ 870 Dolby Atmos® Dual
            Speakers Multiple hands-free voice assistants r
          </p>
          <p>
            $ <span>17,999</span>
          </p>
          <button>Buy Now</button>
        </div>
        <div className="mobile">
          <img src={six} />
          <h5>Redmi Note 11 Pro</h5>
          <p>
            FULL DAY'S CHARGE IN 15 MINUTES 67W Turbo Charge 67W in-box charger
            gives you a day's charge in 15 minutes.r
          </p>
          <p>
            $ <span>22999</span>
          </p>
          <button>Buy Now</button>
        </div>
        <div className="mobile">
          <img src={one} />
          <h5>OnePlus 10R 5G</h5>

          <p>
            All Matte Premium Design Dazzling halo ring design Encircling the
            main camera, the halo ring adds an element of charm. Excellent
            anti-glare frosted glass Matte finish minimizes fingerprint marks,
            keeping your phone look brand new.
          </p>
          <p>
            $ <span>38,342</span>
          </p>
          <button>Buy Now</button>
        </div>
        <div className="mobile">
          <img src={two} />
          <h5>OnePlus 9RT 5G</h5>

          <p>
            Qualcomm® Snapdragon™ 888 65T W. Real Warp Charging IMX766 Flagship
            Image Sensor with OIS 120 Hz FHD + All-Action OLED Display
          </p>
          <p>
            $ <span>22999</span>
          </p>
          <button>Buy Now</button>
        </div>
        <div className="mobile">
          <img src={three} />
          <h5>OnePlus 9 5G</h5>

          <p>Flaunt Your Best Flagship IMX709 Selfie Sensor</p>
          <p>
            $ <span>22999</span>
          </p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
