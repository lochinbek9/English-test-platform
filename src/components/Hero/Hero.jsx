
import bgImage from "../../assets/video/back_video1.mp4"
import "./Hero.css"

function Hero() {
    return (
        <section className="hero" id="hero">
            <video autoPlay loop muted className="hero__back__video">
                <source src={bgImage} type="video/mp4" />
            </video>
            <div>
                <div className="container hero__container">
                    <div>
                        <h1 className="text-center text-white text-9xl">
                            Chet tillari online platformasi! </h1>
                        <p className="text-center text-white text-2xl italic underline underline-offset-9">Til bilish darajangizni tekshiring!</p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Hero