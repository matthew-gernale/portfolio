import GlassIcons from '../components/GlassIcons'
import DecryptedText from '../components/DecryptedText'
import CSharp from '../assets/images/icons/c-sharp.png'


const items = [
    { icon: CSharp, color: '#ced4da', label: 'C#' },
    { icon: null, color: '#ced4da', label: 'JavaScript' },
    { icon: null, color: '#ced4da', label: 'TypeScript' },
    { icon: null, color: '#ced4da', label: '.Net' },
    { icon: null, color: '#ced4da', label: 'React' },
    { icon: null, color: '#ced4da', label: 'Blazor' },
    { icon: null, color: '#ced4da', label: 'TailwindCSS' },
    { icon: null, color: '#ced4da', label: 'MudBlazor' },
    { icon: null, color: '#ced4da', label: 'FluentUI' },
    { icon: null, color: '#ced4da', label: 'MSSQL' },
    { icon: null, color: '#ced4da', label: 'Git' },
    { icon: null, color: '#ced4da', label: 'EF Core' },
    { icon: null, color: '#ced4da', label: 'LINQ' },
    { icon: null, color: '#ced4da', label: 'Azure' },
    { icon: null, color: '#ced4da', label: 'FaceAPI' },
    { icon: null, color: '#ced4da', label: 'OpenAI' },
];

const SkillSection = () => {
  return (
      <section className="p-[50px]">
          <p className="text-[40px] font-semibold mb-2">
              <DecryptedText
                  text="My Skills"
                  animateOn="view"
                  revealDirection="start"
                  speed="60"
                  maxIterations="10"
              />
          </p>
          <GlassIcons items={items} className="custom-class" />
      </section>
  );
}

export { SkillSection }