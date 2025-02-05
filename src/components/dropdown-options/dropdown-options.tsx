import { useRef, useState } from 'react';
import './dropdown-options.css';

type OptionType = {
  value: number;
  label: string;
};

export const DropdownList = () => {
  const options: OptionType[] = [
    { value: 1, label: 'Famous people' },
    { value: 2, label: 'Events' },
    { value: 3, label: 'Fights' },
    { value: 4, label: 'Deals' },
    { value: 5, label: 'Discoveries' },
    { value: 6, label: 'Cultural events' },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<OptionType>(options[0]);
  const listRef = useRef<HTMLUListElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectOption = (option: OptionType) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const scrollList = (direction: number) => {
    if (listRef.current) {
      listRef.current.scrollBy({ top: direction * 50, behavior: 'smooth' });
    }
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <span>Show: {selectedOption.label}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="dropdown-list-wrap">
          <button className="scroll-button" onClick={() => scrollList(-1)}>
            ▲
          </button>
          <ul className="dropdown-list" ref={listRef}>
            {options.map((option) => (
              <li key={option.value} className="dropdown-item" onClick={() => selectOption(option)}>
                {option.label}
              </li>
            ))}
          </ul>
          <button className="scroll-button" onClick={() => scrollList(1)}>
            ▼
          </button>
        </div>
      )}
    </div>
  );
};
