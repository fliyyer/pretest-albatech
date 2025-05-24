import Navbar from "../components/Navbar"
import Team from "../assets/team.png"
import CardServices from "../components/CardServices"
import { portofolioData, progressData, servicesData, stackData, testimonialData } from "../constant/dummyData"
import CardPortofolio from "../components/CardPortofolio"
import CardTestimonial from "../components/CardTestimonial"
import SliderPartner from "../components/SliderPartner";
import Footer from "../components/Footer"


const Homepage = () => {

    return (
        <main className="flex h-screen flex-col bg-white">
            <Navbar />
            <header className="mt-32 flex w-full max-w-7xl flex-col items-center justify-between px-4 md:flex-row md:mx-auto">
                <div className="relative w-full md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-secondary">
                        Build or scale up
                        <br />
                        <span className="font-normal">your development team</span>
                    </h1>
                    <div className="mt-6 flex items-center gap-3">
                        <span className="h-1 w-12 bg-primary" />
                        <span className="text-secondary text-lg font-medium">
                            in weeks, not months
                        </span>
                    </div>
                    <button className="mt-8 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-secondary hover:bg-yellow-300 transition">
                        Book now
                    </button>
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <img
                        src={Team}
                        alt="Team working on code"
                        className="w-full rounded-xl object-cover shadow-md"
                    />
                </div>
            </header>
            <section className="flex flex-col w-full my-20 items-center max-w-7xl mx-auto">
                <p className="text-gray-400 ">Complete Packpage</p>
                <h2 className="text-2xl text-center md:text-3xl mt-2 font-semibold leading-tight text-secondary">From product design to software continous delivery</h2>
                <div className="grid px-4 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 my-10">
                    {servicesData.map((service, index) => (
                        <CardServices
                            key={index}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-6 px-10 w-full gap-10 md:gap-26 items-center mt-10">
                    {stackData.map((stack, index) => (
                        <img
                            key={index}
                            src={stack.stack}
                            alt={stack.title}
                            className=" object-contain inline-block mx-2"
                        />
                    ))}
                </div>
            </section>
            <section className="flex flex-col mb-10 w-full items-center py-10 mx-auto bg-secondary">
                <h2 className="text-xl md:text-3xl mt-2 font-semibold leading-tight max-w-3xl text-center text-primary">Our Progress Comes with a Collaboration Between Creativy, Ideas, and Technology</h2>
                <div className="grid grid-cols-3 items-center w-full max-w-7xl mx-auto my-5">
                    {progressData.map((progress, index) => (
                        <div key={index} className="flex text-white mt-6 flex-col items-center justify-center">
                            <p className="text-2xl md:text-5xl font-semibold">{progress.count}+</p>
                            <span className="font-light text-xs text-nowrap text-center md:text-lg">{progress.title}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className="flex flex-col w-full my-20 items-center max-w-7xl mx-auto">
                <p className="text-gray-400 ">Portofolio</p>
                <h2 className="text-2xl md:text-3xl mt-2 font-semibold leading-tight text-center text-secondary">The software that we build takes our clients to the next level</h2>
                <div className="grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 my-10">
                    {portofolioData.map((portofolio, index) => (
                        <CardPortofolio
                            key={index}
                            image={portofolio.image}
                            category={portofolio.category}
                            title={portofolio.title}
                            description={portofolio.description}
                        />
                    ))}
                </div>
                <button className=" mt-4 md:mt-8 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-secondary hover:bg-yellow-300 transition">
                    Learn more
                </button>
            </section>
            <section className="flex flex-col w-full mb-10 md:my-20 items-center max-w-7xl mx-auto">
                <p className="text-gray-400 ">Testimonial</p>
                <h2 className="text-2xl md:text-3xl mt-2 font-semibold leading-tight text-center text-secondary">What clients love in working with Albatech Team</h2>
                <div className="grid px-4 lg:px-0 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto  gap-10 justify-center my-10">
                    {testimonialData.map((testimonial, index) => (
                        <CardTestimonial
                            key={index}
                            image={testimonial.image}
                            title={testimonial.title}
                            feedback={testimonial.feedback}
                            name={testimonial.name}
                            position={testimonial.position}
                        />
                    ))}
                </div>
                <SliderPartner />
            </section>
            <section className="w-full px-4 max-w-7xl mx-auto">
                <div className="flex flex-col px-4 text-center py-10 rounded-4xl bg-primary mb-20 items-center justify-center ">
                    <p className="text-secondary text-base mb-4">Is software importtant for your business?</p>
                    <h2 className="text-4xl font-semibold text-secondary mb-4">Build it with Albatech</h2>
                    <button className="font-semibold text-xs mt-5 hover:bg-secondary transition  text-secondary hover:text-primary cursor-pointer px-8 py-3 rounded-full">
                        Consultation Now
                    </button>
                </div>
            </section>
            <Footer />
        </main>

    )
}

export default Homepage
