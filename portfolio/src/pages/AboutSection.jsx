import ProfileCard from '../components/ProfileCard'
import AvatarUrl from '../assets/images/matt.jpg'
import DecryptedText from '../components/DecryptedText'
import CountUp from '../components/CountUp'
import AnimatedList from '../components/AnimatedList'


const AboutSection = () => {
    return (
        <section className="flex flex-col gap-3 px-[40px] bg-white py-[50px]">
            <div className="flex gap-[50px]">
                <ProfileCard
                    name="Matt Gernale"
                    title="System Developer"
                    handle="matt4youu"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl={AvatarUrl}
                    showUserInfo={true}
                    enableTilt={false}
                    onContactClick={() => console.log('Contact clicked')} />
                <div>
                    <div className="backdrop-blur-xl bg-gradient-to-br from-white/30 via-white/10 to-white/5 border border-gray-300 rounded-2xl shadow-xl p-6">
                        <p className="text-[40px] font-semibold mb-2">
                            <DecryptedText
                                text="About Me"
                                animateOn="view"
                                revealDirection="start"
                                speed="60"
                                maxIterations="10"
                            />
                        </p>
                        <p className="text-[15px]">
                            <DecryptedText
                                text="I am a System Developer with over a year of experience in developing ERP systems tailored to client-specific business processes. I focus on innovation and quality using best practices like SOLID principles, DRY, and design patterns."
                                animateOn="view"
                                revealDirection="start"
                                speed="60"
                                maxIterations="10"
                            />
                        </p>
                    </div>


                    <div className="backdrop-blur-xl bg-gradient-to-br from-white/30 via-white/10 to-white/5 border border-gray-300 rounded-2xl shadow-xl p-6 mt-[50px]">
                        <p className="text-[40px] font-semibold mb-2">
                            <DecryptedText
                                text="Educational Background"
                                animateOn="view"
                                revealDirection="start"
                                speed="60"
                                maxIterations="10"
                            />
                        </p>
                        <p className="text-[15px] font-semibold">
                            <DecryptedText
                                text="Bachelor of Science in Computer Enineering"
                                animateOn="view"
                                revealDirection="start"
                                speed="60"
                                maxIterations="10"
                            />
                        </p>
                        <p className="text-[15px]">
                            <DecryptedText
                                text="Polytechnic University of the Philippines"
                                animateOn="view"
                                revealDirection="start"
                                speed="60"
                                maxIterations="10"
                            />
                        </p>
                        <p className="text-[15px]">
                            <CountUp
                                from={2001}
                                to={2019}
                                separator=""
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />

                            <span className="px-[5px]">-</span>

                            <CountUp
                                from={2001}
                                to={2023}
                                separator=""
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                        </p>
                    </div>
                </div>
            </div>
            
            <div>
                <p className="text-2xl font-semibold mb-2">Experience</p>
                <div>
                    <p><strong>SBC Simplified Business Consultancy</strong> <br />
                        Junior Developer (Mar 2024 - Sept 2024) <br />
                        Junior Developer Level 2 (Sept 2024 - Mar 2025) <br />
                        System Developer (Mar 2025 - Present) <br />
                        <br />
                        Key Achievements:</p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Developed customized ERP systems</li>
                        <li>Integrated AI and payment gateway APIs</li>
                        <li>Received "Consistent Achiever Award" (Dec 20, 2024)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export { AboutSection }
