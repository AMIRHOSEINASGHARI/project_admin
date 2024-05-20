const CustomBadge = ({ condition, title }) => {
  return (
    <p
      className={`py-1 px-2 text-p2 rounded-btn w-fit ${
        condition
          ? "text-darkGreen bg-lightGreen"
          : "text-darkOrange bg-lightOrange"
      }`}
    >
      {title}
    </p>
  );
};

export default CustomBadge;
