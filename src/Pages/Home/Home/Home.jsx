import SectionHeading from '../../../Components/SectionHeading/SectionHeading';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import './home.css'

const Home = () => {
    return (
        <section>
            <SectionHeading heading={"Home"}></SectionHeading>
            <ProfilePhoto></ProfilePhoto>
        </section>
    );
};

export default Home;