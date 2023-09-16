import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

const ListItem = ({index}) => {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://ntvb.tmsimg.com/assets/p17560244_b_h8_ac.jpg?w=960&h=540"
        alt=""
      />
      {isHovered && (
        <>
          {/* <video src={trailer} autoPlay={true} loop /> */}
          <iframe
            auto
            src="https://www.youtube.com/embed/Znsa4Deavgg?si=aUJ8F5cgG1Qjf9WL?controls=0&autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="YouTube video player"
            frameborder="0"
            allowfullscreen
          ></iframe>;

          
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>6 hour 33 mins</span>
              <span className="limit">+16</span>
              <span>2022</span>
            </div>
            <div className="desc">
             We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ListItem