import '../assets/css/ProjectCard.css'
import PropTypes from 'prop-types';


const Card = (props) => {

    return (
        
        <div className="card flex flex-col items-center justify-center w-fit px-10 py-10 rounded-2xl cursor-pointer">
            <a href={props.project} target="_blank" rel="noreferrer" className='block'>
                <h2 className="text-slate-700 font-semibold pb-5">{props.title}</h2>
                <img src={props.imageUrl} alt="web-snap" className="snap rounded-lg border border-[#222222] w-80" />
                <p className="place-self-start pt-5 pb-2 text-zinc-400 text-xs uppercase">Technologies Used</p>
                <div className="grid grid-flow-col gap-2 place-self-start">
                    {props.icon.map((icons, index) => (
                        <div key={index} className="icon bg-[#222222] rounded-full p-1">
                            <img src={icons} alt="icons" className="w-5" />
                        </div>
                    ))}
                </div>
            </a>
        </div>
    );
}

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    icon: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired
};

export default Card