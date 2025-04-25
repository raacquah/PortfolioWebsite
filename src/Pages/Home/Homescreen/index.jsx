import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Carousel from "../Carousel"; // Adjust the path if needed
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";


// Removed images appearing at the top of the screen
const images = [
    // { src: "../../../../public/img/cust.png", alt: "Slide 1" },
    // { src: "../../../../public/img/recommender.png", alt: "Slide 2" },
    // { src: "../../../../public/img/vortex.png", alt: "Slide 3" },
];

export default function Home() {
    return (
        <>
            <Carousel images={images} interval={5000} />
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <Testimonial />
            <ContactMe />
            <Footer />
        </>
    );
}