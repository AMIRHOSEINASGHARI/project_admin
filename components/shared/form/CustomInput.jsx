"use client";

// react
import { useState } from "react";

const CustomInput = ({
  type,
  name,
  label,
  value,
  onChange,
  wrapperClassName,
}) => {
  const [active, setActive] = useState(false);

  const onFocus = () => {
    setActive(() => true);
  };

  const onBlur = () => {
    if (value.length === 0) {
      setActive(() => false);
    }
  };

  return (
    <div className={`input-group ${wrapperClassName && wrapperClassName}`}>
      <input
        type={type || "text"}
        name={name || "input"}
        value={value}
        onChange={onChange}
        className="input w-full"
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {label && (
        <label className={`user-label ${active && "active"}`}>{label}</label>
      )}
    </div>
  );
};

export default CustomInput;
