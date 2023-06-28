import { Link } from "react-router-dom";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <SectionHeading heading={"Home"}></SectionHeading>
      <div className="grid grid-2-col">
        <div className="hero">
          <h3 className="secondary-heading">
            Hi, I am <span>Al - Amin</span>
          </h3>
          <p className="subtitle">MERN stack web developer</p>
          <p className="description">
            As a MERN stack web developer, I specialize in creating dynamic and
            responsive web applications using the powerful combination of
            MongoDB, Express.js, React.js, and Node.js. With a strong foundation
            in these technologies, I am passionate about crafting seamless user
            experiences and leveraging the full potential of the MERN stack to
            build robust and scalable web solutions
          </p>
          <Link to="/about" className="btn">
            More about me
          </Link>
        </div>
        <ProfilePhoto></ProfilePhoto>
      </div>
    </section>
  );
};

export default Home;
