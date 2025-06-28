
import { useState, useEffect, useRef } from 'react'
import AvatarUrl from '../assets/images/grad-pic.png'
import CV from '../assets/John Matthew Gernale Resume.pdf'

import HeaderTitle from '../components/HeaderTitle'
import SkillSetContainer from '../components/SkillSetContainer'
import { SquareUserRound, GraduationCap, CodeXml } from 'lucide-react'
import DownloadIcon from '../assets/png-icons/dl-icon.png'


const AboutSection = () => {
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.offsetHeight);
        }
    }, []);

    const technicalSkills = ['C#', 'JavaScript', 'TypeScript', '.Net', 'React', 'Blazor', 'Tailwind', 'MudBlazor', 'Fluent UI', 'MSSQL', 'Git', 'EF Core', 'LINQ', 'Azure', 'Face API', 'OpenAI API', 'POSTMAN', 'RESTful API', 'SOLID Principle', 'DRY', 'Design Pattern'];
    const softSkills = ['Problem Solving', 'Client Communication', 'Collaboration', 'Agile/Scrum', 'Presentation', 'Timeliness', 'Quality Output'];
    return (
        <section className="flex flex-col gap-3 px-[10px] md:px-[40px] bg-white py-[50px]" id='aboutPage'>
            <div className="flex gap-[50px] justify-center">

                <div>
                    <div className="about-container mb-[20px] flex flex-col md:flex-row items-center md:items-start gap-[40px]">
                        {/* Profile Image */}
                        <div
                            className="hidden sm:block glass-avatar-wrapper relative rounded-xl overflow-hidden backdrop-blur-lg shadow-2xl border border-white/20"
                            style={{ height: contentHeight }}
                        >
                            <img
                                src={AvatarUrl}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-lg"
                            />

                            {/* Glass Shine Overlay */}
                            <div className="absolute inset-0 bg-white/10 rounded-lg pointer-events-none" />

                            {/* Diagonal Shine Animation */}
                            <div className="absolute inset-0 shine-effect" />
                        </div>

                        {/* About Details */}
                        <div ref={contentRef} className="text-slate-700 max-w-[600px]">
                            <HeaderTitle title="About" icon={<SquareUserRound className="stroke-[1px]" />} />
                            <p className="text-[14px] leading-relaxed">
                                I am a System Developer with over a year of experience in developing ERP systems tailored to client-specific business processes. I focus on innovation and quality using best practices like SOLID principles, DRY, and design patterns.
                            </p>

                            <HeaderTitle title="Skills" icon={<CodeXml className="stroke-[1px]" />} className="pt-[30px]" />
                            <SkillSetContainer
                                title='Technical Skills'
                                skills={technicalSkills}
                                itemClassName='bg-blue-200 border border-blue-600 rounded-full text-blue-600'
                                className='pb-[15px]' />
                            <SkillSetContainer
                                title='Soft Skills'
                                skills={softSkills}
                                itemClassName='bg-green-200 border border-green-500 rounded-full text-green-600'
                                className='' />

                            <div className="h-[1px] bg-slate-300 rounded-sm my-[10px]" />


                            <a
                                href={CV}
                                target="_blank"
                                rel="noreferrer"
                                className="btn px-5 py-7 rounded-md flex text-nowrap gap-7 text-sm items-center justify-center overflow-hidden"
                            >
                                <img src={DownloadIcon} className="w-5" />
                                <span className="">Download CV</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export { AboutSection }
