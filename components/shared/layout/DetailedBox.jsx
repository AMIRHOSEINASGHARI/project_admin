const DetailedBox = ({ title, subtitle, icon, children }) => {
  return (
    <div className="box lg:flex w-full">
      <div className="w-full lg:w-[400px] max-lg:mb-5 flex gap-2 items-center h-fit">
        {icon && icon}
        <div>
          <h1 className="h1">{title}</h1>
          {subtitle && <p className="text-p2 text-darkGray">{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  );
};

export default DetailedBox;