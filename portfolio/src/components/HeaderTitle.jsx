

function HeaderTitle({
    icon,
    className = "",
    title = ''
}) {
  return (
      <div className={`${className} flex gap-[5px]`}>
          {icon}
          <p className="text-[18px] font-semibold mb-2">{title}</p>
      </div>
  );
}

export default HeaderTitle;