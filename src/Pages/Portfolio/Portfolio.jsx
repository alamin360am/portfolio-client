import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import "./portfolio.css";
import img1 from "./../../../public/Summer-Camp-Home-min.png";
import img2 from "./../../../public/Chinese-Food-min.png";
import img3 from "./../../../public/Toy-House-Home-min.png";
import img4 from "./../../../public/Game-Guess-My-Number-min.png";

const Portfolio = () => {
  return (
    <section>
      <SectionHeading heading={"Portfolio"}></SectionHeading>
      <div className="grid grid-3-col">
        <div className="portfolio-box scale-animation">
          <img src={img1} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> Summer Camp
            </p>
            <p>
              <span>Technologies:</span> HTML, TailwindCSS, MERN Stack
            </p>
            <p className="description">
              A fully responsive website. It is a online courses website where a
              teacher can publish his course and user can get that course.
            </p>
            <div className="grid grid-3-col">
              <a
                href="https://summer-camp-b2351.web.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/alamin360am/summer-camp-client"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                client site
              </a>
              <a
                href="https://github.com/alamin360am/summer-camp-server"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                server site
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={img3} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name: Toy House</span>
            </p>
            <p>
              <span>
                Technologies: HTML, CSS, React.js, Express.js, Mongodb
              </span>
            </p>
            <p className="description">
              A fully responsive e-commers website. This is a toy store where a
              user can add his toy. Also can delete it and modify it.
            </p>
            <div className="grid grid-3-col">
              <a
                href="https://toy-house-fde4a.web.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/alamin360am/toy-house-client/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                client site
              </a>
              <a
                href="https://github.com/alamin360am/toy-house-server"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                server site
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={img2} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name: Chinese Chef</span>
            </p>
            <p>
              <span>Technologies:</span> HTMl, CSS, React.js, Express.js
            </p>
            <p className="description">
              A fully responsive recipes website. This website is a chef website
              where a chef publish his recipes.
            </p>
            <div className="grid grid-3-col">
              <a
                href="https://chinise-food.web.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/alamin360am/chinese-food-client"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                client site
              </a>
              <a
                href="https://github.com/alamin360am/chinese-food-server"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                server site
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={img4} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> Guess Number Game
            </p>
            <p>
              <span>Technologies:</span> HTML, CSS, JavaScript
            </p>
            <p className="description">A small number guessing game. To develop this game I used html, vanilla CSS and vanilla JavaScript</p>
            <div className="grid grid-3-col">
              <a
                href="https://alamin360am.github.io/Guess-Number-Game/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/alamin360am/Guess-Number-Game"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                client site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
