import insta from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import facebook from "../assets/facebook.svg";

import { Link } from "react-router-dom";

import "../css/homepage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
        beatae, illum consequatur error deserunt maiores est laudantium eius
        obcaecati distinctio sunt velit perferendis dolorem corrupti. Ad
        distinctio cum nesciunt natus consequuntur ex incidunt dicta culpa
        suscipit. Animi exercitationem eius alias sapiente fuga, in molestias
        aperiam id cum maiores eos facere.
      </div>
      <Link to="/classes" className="link-dom">
        <button className="get-started">Get Started</button>
      </Link>
      <div className="socials-container">
        <p>-- Our Socials --</p>
        <div className="socials">
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Insta" />
          </a>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
          <a
            href="http://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="YouTube" />
          </a>
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
