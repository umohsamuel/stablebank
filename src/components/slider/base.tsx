import React, { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  initialValue,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue ?? min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full cursor-pointer accent-[#4649D6]"
      />
      <div className="flex w-full justify-between text-base font-normal text-[#E9E9E9]">
        <span>${min.toLocaleString()}</span>
        <span className="text-white">${value.toLocaleString()}</span>
        <span>${max.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Slider;
