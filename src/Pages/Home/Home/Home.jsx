import { Link } from "react-router-dom";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <SectionHeading heading={"Home"}></SectionHeading>
      <div className="grid grid-2-col">
        <div className="hero">
          <h3 className="secondary-heading transform-left-animation">
            Hi, I Am <span>Al - Amin</span>
          </h3>
          <p className="subtitle transform-left-animation">MERN stack web developer</p>
          <p className="description transform-right-animation">
          As a MERN stack web developer, I specialize in creating dynamic and responsive web  applications using the powerful combination of MongoDB, Express.js, React.js, and Node.js. With a strong foundation in these technologies, I am passionate about crafting seamless user experiences and leveraging the full potential of the MERN stack to build robust and scalable web solutions
          </p>
          <Link to="/about" className="btn margin-right-sm transform-right-animation">
            More about me
          </Link>
          <a
            href="https://drive.google.com/file/d/1oAIgAwaUDn8sfH7ue3guiv66jt3Kti19/view?usp=sharing"
            className="btn transform-right-animation" rel="noopener noreferrer" target="_blank"
          >Download CV</a>
          <div className="social scale-animation">
            <div className="social-list">
              <a
                href="https://www.linkedin.com/in/md-al-amin-rahmatullah-770185280/"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin></AiFillLinkedin>
              </a>
            </div>
            <div className="social-list">
              <a
                href="https://www.facebook.com/alamin360am"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillFacebook></AiFillFacebook>
              </a>
            </div>
            <div className="social-list">
              <a
                href="https://github.com/alamin360am"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineGithub></AiOutlineGithub>
              </a>
            </div>
            <div className="social-list">
              <a
                href="https://wa.me/qr/6AOTB44USRA4O1"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineWhatsApp></AiOutlineWhatsApp>
              </a>
            </div>
          </div>
        </div>
        <ProfilePhoto></ProfilePhoto>
      </div>
    </section>
  );
};

export default Home;
