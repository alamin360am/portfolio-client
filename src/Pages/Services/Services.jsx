import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import "./service.css";
import { AiOutlineCode, AiOutlineCreditCard } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";

const Services = () => {
  return (
    <section>
      <SectionHeading heading={"Service"}></SectionHeading>
      <div className="grid grid-3-col">
        <div className="service-box scale-animation">
          <div className="icon-box">
            <AiOutlineCode></AiOutlineCode>
          </div>
          <h4 className="tertiary-heading margin-bottom-sm">Web Development</h4>
          <p className="description">
          Professional website development using the MERN stack, creating dynamic and interactive web applications tailored to your specific requirements. Utilizing modern technologies and best practices to deliver high-quality results.
          </p>
        </div>
        <div className="service-box scale-animation">
          <div className="icon-box">
            <AiOutlineCreditCard></AiOutlineCreditCard>
          </div>
          <h4 className="tertiary-heading margin-bottom-sm">Custom Web Application Development</h4>
          <p className="description">
          Building custom web applications from scratch using the MERN stack. Whether it&apos;s an e-commerce platform, social networking site, or any other complex web application, I can develop scalable and robust solutions to meet your business needs.
          </p>
        </div>
        <div className="service-box scale-animation">
          <div className="icon-box">
            <BsCodeSlash></BsCodeSlash>
          </div>
          <h4 className="tertiary-heading margin-bottom-sm">Front-end Development</h4>
          <p className="description">
          Crafting engaging user interfaces and responsive web designs using React.js. I specialize in building intuitive and visually appealing front-end experiences, incorporating modern design principles, UI libraries, and CSS frameworks.
          </p>
        </div>
        <div className="service-box scale-animation">
          <div className="icon-box">
            <GrHostMaintenance></GrHostMaintenance>
          </div>
          <h4 className="tertiary-heading margin-bottom-sm">Website Maintenance and Support</h4>
          <p className="description">
          Providing ongoing maintenance, updates, and support services for existing MERN stack applications. I ensure your website remains up-to-date, secure, and optimized, allowing you to focus on your core business while I handle the technical aspects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
