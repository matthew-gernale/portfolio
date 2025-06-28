

function SkillSetContainer({ title, skills, itemClassName, className }) {
    return (
        <div className={`${className}`}>
            <p className="text-[14px] font-semibold pb-[10px]">{title}</p>

            <div className='flex flex-wrap gap-2'>
                {skills.map((item) =>
                    (<p className={`${itemClassName} px-[10px] py-[4px] w-fit min-w-[50px] text-center`}>{item}</p>)
                )}
            </div>
        </div>
  );
}

export default SkillSetContainer;