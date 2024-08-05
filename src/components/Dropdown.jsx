import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Dropdown.module.css';
import utils from '../styles/utils.module.css';
import rightArrow from '../assets/LandingPage/right_arrow_landing_page_section.png';

const Dropdown = ({ placeholder, list, state, setState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Update the selected issue
  const handlerValueClick = (value) => {
    setState(value);
    setIsOpen(false); // Close the dropdown after selecting an issue
  };

  return (
    <div className={styles.customDropdown} ref={dropdownRef}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        <button className={utils.btn1}><p>{state ? state : placeholder}</p> <img src={rightArrow} className={styles.downArrow} /></button>
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {list.map((value) => (
            <div key={value} className={styles.valueOption} onClick={() => handlerValueClick(value)}>
              <input
                type="checkbox"
                checked={state === value}
                readOnly
                className={styles.checkbox}
              />
              <label><p>{value}</p></label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

