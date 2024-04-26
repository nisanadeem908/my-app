import React, { useState } from 'react';


const BottomSheet = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBottomSheet = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (value && value.find((v) => v.value === option.value)) {
    
      onChange(value.filter((v) => v.value !== option.value));
    } else {
     
      onChange([...value, option]);
    }
  };

  return (
    <div className="bottom-sheet-container">
      <div className="selected-options" onClick={toggleBottomSheet}>
        {value && value.length > 0 ? (
          value.map((option) => (
            <div key={option.value} className="selected-option">
              {option.label}
            </div>
          ))
        ) : (
          <div className="placeholder">{placeholder}</div>
        )}
      </div>
      {isOpen && (
        <div className="options-container">
          {options.map((option) => (
            <div
              key={option.value}
              className={`option ${value && value.find((v) => v.value === option.value) ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BottomSheet;
