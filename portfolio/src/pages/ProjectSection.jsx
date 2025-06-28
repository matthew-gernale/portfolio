import ScrollVelocity from '../components/ScrollVelocity'
import ProjectCard from '../components/ProjectCard'
import ExportIcons  from '../assets/images/icons/ExportIcons';


function ProjectSection() {
  return (
      <section className='py-[50px]' id='projectPage'>
          <div className="scroll-mask-container">
              <ScrollVelocity
                  texts={['LOOK AT MY WORKS', 'LOOK AT MY WORKS']}
                  velocity={100}
                  className="custom-scroll-text"
              />
          </div>

          <div className="flex flex-col items-center justify-start pt-[50px]" id="project">
              <div className="card-wrapper grid grid-flow-row grid-cols-1 sm:grid-cols-3 px-[20px] sm:px-[10px] gap-7">
                  <ProjectCard
                      title="Employee Management System"
                      imageUrl={ExportIcons.Ems} icon={[ExportIcons.CsharpIcon, ExportIcons.HtmlIcon, ExportIcons.CssIcon, ExportIcons.BootstrapIcon, ExportIcons.MssqlIcon]}
                      project="https://youtu.be/_g9xKQa6P5w" />

                  <ProjectCard
                      title="Snake Game"
                      imageUrl={ExportIcons.SnakeGame}
                      icon={[ExportIcons.ReactIcon, ExportIcons.HtmlIcon, ExportIcons.CssIcon, ExportIcons.JsIcon, ExportIcons.TailwindIcon]}
                      project="https://matthew-gernale.github.io/JavaSnake/" />

                  <ProjectCard
                      title="Noted" imageUrl={ExportIcons.NotedApp}
                      icon={[ExportIcons.ReactIcon, ExportIcons.HtmlIcon, ExportIcons.CssIcon, ExportIcons.JsIcon, ExportIcons.BootstrapIcon]}
                      project="https://matthew-gernale.github.io/noted/" />

                  <ProjectCard
                      title="City Gallery"
                      imageUrl={ExportIcons.CityApp}
                      icon={[ExportIcons.HtmlIcon, ExportIcons.CssIcon]}
                      project="https://matthew-gernale.github.io/city-gallery/" />

                  <ProjectCard
                      title="Jm Resort Landing Page"
                      imageUrl={ExportIcons.Resort}
                      icon={[ExportIcons.FigmaIcon, ExportIcons.PsIcon]} project={ExportIcons.Jm} />

                  <ProjectCard
                      title="P2P Booking App"
                      imageUrl={ExportIcons.P2pImg}
                      icon={[ExportIcons.FigmaIcon]}
                      project={ExportIcons.P2p} />
              </div>
          </div>
      </section>
  );
}

export { ProjectSection }