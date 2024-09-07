import { useState } from 'react';
import './dropdown-optins.css';

export const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Famous people');

  const options = [
    { value: 1, label: 'Famous people' },
    { value: 2, label: 'Events' },
    { value: 3, label: 'Fights' },
    { value: 4, label: 'Deals' },
    { value: 5, label: 'Discoveries' },
    { value: 6, label: 'Cultural events' },
  ];

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <span>Show: </span>
        <span className="selected-value">{selectedOption}</span>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </button>
      {isOpen && (
        <div className="dropdown-list-wrap">
          <button className="button-up">▲</button>
          <button className="button-down" style={{ order: 3 }}>
            ▼
          </button>
          <ul className="dropdown-list">
            {options.map(({ value, label }) => (
              <li key={value} onClick={() => selectOption(label)}>
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
