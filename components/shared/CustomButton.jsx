"use client";

const CustomButton = ({ type, classNames, disabled, title, icon, onClick }) => {
  return (
    <button
      type={type || "button"}
      className={`rounded-btn ${classNames && classNames}`}
      disabled={disabled}
      onClick={onClick || null}
    >
      {icon && icon}
      {title && title}
    </button>
  );
};

export default CustomButton;
