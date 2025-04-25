export default function HeroSection() {
    return (
        <section id = "heroSection" className = "hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Richmond</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        I am a full stack developer with a strong passion for creating AI tools that support economic financial innovation.
                        <br /> This is how I do it...
                    </p>
                </div>
                <button className="btn btn-primary">Get in Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img2.png" alt="Hero Section" />
            </div>
        </section>
    )
    ;
}