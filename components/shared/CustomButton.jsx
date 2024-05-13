"use client";

const CustomButton = ({ type, classNames, disabled, title, icon, onClick }) => {
  return (
    <button
      type={type || "button"}
      className={`p-btn rounded-btn ${classNames && classNames}`}
      disabled={disabled}
      onClick={onClick || null}
    >
      {icon && icon}
      {title && <p>{title}</p>}
    </button>
  );
};

export default CustomButton;
