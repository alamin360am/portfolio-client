import { Link } from "react-router-dom";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import "./about.css";
import { BsCalendarDate } from "react-icons/bs";

const About = () => {
  return (
    <section>
      <SectionHeading heading={"About Me"}></SectionHeading>
      <h3 className="secondary-heading margin-bottom-bg">
        I am Al - Amin, A<span> Web developer</span>
      </h3>
      <p className="description margin-bottom-bg">
        I am Md. Al Amin Rahmatullah. Self-Motivated Professional Full Stack Web
        Developer with 3 years of working experience in a highly competitive
        environment. I&apos;ll do bug fixing on your website or if you need to
        add more features to your websites. I can convert your desired design
        into real work as per your requirement. I&apos;ll put all my best
        efforts and creativity to ensure 100% Satisfaction, Fast_Delivery, and
        Quality_Services. You will find working with me to be a little different
        in a relaxed and friendly environment. Creativity, Professional
        Competence & Work on Time, are the keywords that describe my work.
      </p>
      <div className=" information grid grid-2-col">
        <div className="data">
          <div className="grid grid-2-col">
            <div className="info-box">
              <p className="info-title">Birthday:</p>
              <p className="info">10th february, 2002</p>
            </div>
            <div className="info-box">
              <p className="info-title">Age:</p>
              <p className="info">21</p>
            </div>
            <div className="info-box">
              <p className="info-title">Website:</p>
              <p className="info">
                <a href="#">www.domain.com</a>
              </p>
            </div>
            <div className="info-box">
              <p className="info-title">Email:</p>
              <p className="info">
                <a href="mailto:alaminhimu0@gmail.com">alaminhimu0@gmail.com</a>
              </p>
            </div>
            <div className="info-box">
              <p className="info-title">Degree:</p>
              <p className="info">HSC</p>
            </div>
            <div className="info-box">
              <p className="info-title">Phone:</p>
              <p className="info">
                <a href="tel:+8801765923094">+8801765923094</a>
              </p>
            </div>
            <div className="info-box">
              <p className="info-title">City:</p>
              <p className="info">Rangpur, Bangladesh</p>
            </div>
            <div className="info-box">
              <p className="info-title">Freeluncer:</p>
              <p className="info">Available</p>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/16QdwO-7QukuyDp7zldhjiC44d7d5edNp/view?usp=sharing"
            className="btn margin-right-sm"
          >
            Download CV
          </a>
          <Link to="/contact" className="btn">
            Hair Me
          </Link>
        </div>
        <div className="skill">
          <div className="skill-box">
            <p className="skill-name">Html</p>
            <div className="skill-bar">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">CSS</p>
            <div className="skill-bar">
              <span style={{ width: "90%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">Bootstrap</p>
            <div className="skill-bar">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">TailwindCSS</p>
            <div className="skill-bar">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">React.js</p>
            <div className="skill-bar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">Node.js</p>
            <div className="skill-bar">
              <span style={{ width: "74%" }}></span>
            </div>
          </div>
        </div>
      </div>
      <div className="edu-exp grid grid-2-col">
        <div className="education">
          <h3 className="secondary-heading margin-bottom-md">Education</h3>
          <div className="details">
            <div className="details-box">
              <div className="year">
                <BsCalendarDate className="icon"></BsCalendarDate>
                <p>2019 - Present</p>
              </div>
              <h4 className="tertiary-heading margin-bottom-sm">
                B.Sc Degree in Mathematics
              </h4>
              <p className="description">
                I&apos;m currently a student at Carmichael College studying B.Sc
                in Mathematics.
              </p>
            </div>
            <div className="details-box">
              <div className="year">
                <BsCalendarDate className="icon"></BsCalendarDate>
                <p>2017</p>
              </div>
              <h4 className="tertiary-heading margin-bottom-sm">
                Higher Secondary Certificate (HSC)
              </h4>
              <p className="description">
                I got GPA 5.00 out off 5.00 in my higher secondary examination
                from Collectorate School and College, Rangpur. I was in Science
                group in higher secondary study.
              </p>
            </div>
          </div>
        </div>
        <div className="experience">
          <h3 className="secondary-heading margin-bottom-md">Experience</h3>
          <div className="details">
          <p>Coming Soon........</p>
            {/* <div className="details-box">
              <div className="year">
                <BsCalendarDate className="icon"></BsCalendarDate>
                <p>Years</p>
              </div>
              <h4 className="tertiary-heading margin-bottom-sm">
                Job Title
              </h4>
              <p className="description">
                Description
              </p>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
