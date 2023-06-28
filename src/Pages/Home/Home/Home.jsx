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
          <p className="subtitle">A full stack web developer</p>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut placeat
            commodi aut omnis, at reprehenderit quaerat veniam, quam consectetur
            hic id tempore sit temporibus accusamus dolorum assumenda expedita
            dicta libero?
          </p>
          <Link to='/about' className="btn">
            More about me
          </Link>
        </div>
        <ProfilePhoto></ProfilePhoto>
      </div>
    </section>
  );
};

export default Home;
