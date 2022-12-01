import React from "react";
import Landing from "./Images/landing.jpg";
import "./Mobile.css";
import six from "./Images/3d.jpg";
import five from "./Images/battery.jpg";
import purple from "./Images/purple.jpg";
import bat from "./Images/bat.jpg";
import Animation from "./Images/sec11.jpg";
import land1 from "./Images/land1.jpg";
import land2 from "./Images/land2.jpg";
import ImageSlider, { Slide } from "react-auto-image-slider";
import SimpleImageSlider from "react-simple-image-slider";
import Video from "./Video";
import black from "./Images/black.jpg";
const images = [
  // Images urls where we can fetch
  {
    url: "https://oasis.opstatics.com/content/dam/oasis/page/2022/new-homepage/eu/homepage/kv/10t-with-free-buds-z2/0906-HeroBanner_desktop1920-.jpg",
  },
  { url: "https://static.toiimg.com/photo/msid-84137033/84137033.jpg" },
  {
    url: "https://static.tnn.in/photo/msid-94921401,imgsize-491555,width-100,height-200,resizemode-75/94921401.jpg",
  },
  {
    url: "https://i.ytimg.com/vi/WIngs5AtquU/maxresdefault.jpg",
  },
  {
    url: "https://cdn.nerdschalk.com/wp-content/uploads/2018/12/OnePlus-6T.png?w=640",
  },
];
const features = [
  // features urls where we can fetch
  {
    url: "https://img.mensxp.com/media/content/2022/Jan/Screenshot-198_61f13f9b310d3.png?w=820&h=540&cc=1",
  },
  {
    url: "https://i.gadgets360cdn.com/large/oneplus_9rt_launch_image_1633672068804.jpg",
  },
  {
    url: "https://newsimg.giznext.com/mobile/production/news/wp-content/uploads/2021/03/29151121/ezgif.com-gif-maker.jpg",
  },
];
function Headr() {
  return (
    <div>
      {/* Images will display here with slider of Landing Images*/}
      <SimpleImageSlider
        width={"100%"}
        maxW={"100%"}
        height={500}
        images={images}
        autoPlay={true}
        className="displayauto"
      />

      <Video />

      <div style={{ width: "100%", position: "relative" }}>
        <div
          style={{
            width: "100%",
            position: "relative",
            margin: "0px",
            padding: "0px",
          }}
        >
          <img src={Landing} style={{ width: "100%" }} />

          <p className="textimg">INDIA’S FASTEST CHARGING SMARTPHONE*</p>
        </div>
        <div className="Twoimages">
          {/* Images will display here with slider of features*/}
          <div className="textonimg">
            <SimpleImageSlider
              width={"100%"}
              height={500}
              images={features}
              autoPlay={true}
              slideDuration={2}
            />
          </div>
          <div className="textonimg">
            <img src={six} />
            <p className="textimg2">
              Clear Display And Unprecedented Smoothness
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "100%" }}>
          <img src={purple} style={{ width: "100%" }} />
          <img src={bat} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default Headr;
