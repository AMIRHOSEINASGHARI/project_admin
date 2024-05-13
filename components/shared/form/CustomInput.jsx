"use client";

const CustomInput = ({
  type,
  name,
  label,
  value,
  onChange,
  wrapperClassName,
}) => {
  return (
    <div className={`relative ${wrapperClassName && wrapperClassName}`}>
      <input
        type={type || "text"}
        name={name || "input"}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-input bg-transparent border-inputLight hover:border-inputDark focus:border-inputDark Transition`}
      />
      {label && (
        <label className="absolute left-[15px] text-lightGray focus:transform focus:translate-y-[50%] focus:scale-[0.8] focus:bg-white focus:p-[0.2rem]">
          {label}
        </label>
      )}
    </div>
  );
};

export default CustomInput;
