
import SplitText from '../components/SplitText';
import RotatingText from '../components/RotatingText';

const LandingPage = () => {
    return (
        <section className="text-center space-y-2 mb-12 flex flex-col items-center justify-center relative" style={{ marginTop: '-68px' }}>

            <SplitText
                text="Hi there! I am"
                className="text-xl text-gray-600"
                delay={100}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />

            <SplitText
                text="JOHN MATTHEW T. GERNALE"
                className="text-6xl font-bold text-center"
                delay={100}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />

            <SplitText
                text="System Developer"
                className="text-xl text-gray-600"
                delay={100}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />

            <div className="flex gap-2 items-center justify-center" style={ {paddingTop: '50px'} }>
                <p className="font-bold text-xl">Innovative</p> 
                <RotatingText
                    texts={['Solutions', 'Systems', 'Ideas', 'Code', 'Thinking', 'Components', 'Impact', 'Impact']}
                    mainClassName="px-2 sm:px-2 md:px-3 text-white bg-[#C8102E] font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                />
            </div>


            <div className="flex justify-center space-x-4 mt-4">
                <a
                    href="https://github.com/matthew-gernale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white transition-all duration-500 hover:bg-[#C8102E]"
                >
                    <i className="fa-brands fa-github text-gray-800 transition-all duration-500 group-hover:text-white"></i>
                </a>

                <a
                    href="mailto:matthewgernale26@gmail.com"
                    className="group inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white transition-all duration-500 hover:bg-[#C8102E]"
                >
                    <i className="fa-solid fa-envelope text-gray-800 transition-all duration-500 group-hover:text-white"></i>
                </a>
                <a
                    href="https://linkedin.com/in/matthew-gernale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white transition-all duration-500 hover:bg-[#C8102E]"
                >
                    <i className="fa-brands fa-linkedin text-gray-800 transition-all duration-500 group-hover:text-white"></i>
                </a>
            </div>
        </section>
    )
}

export { LandingPage }